import React, { Component } from "react";
import axios from "axios";

import "./Wizard.css";

import Account from "./Account/Account";
import SchoolDetails from "./SchoolDetails/SchoolDetails";
import CreateWorkspace from "./CreateWorkspace/CreateWorkspace";
// import Invite from "../../containers/Invite";

class Wizard extends Component {
  state = {
    index: 0,
    wname: "",
    schoolname: "",
    province: "",
    district: "",
    sector: "",
    names: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
    userId: "",
    schoolcode: "",
    profilepic: "default",
    wprofile: "default",
  };
  next1_method = () => {
    let newUser = {
      names: this.state.names,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    if (this.state.userId === "") {
      axios
        .post("/user/register/master", newUser)
        .then((res) => {
          if (res.data.success) {
            this.setState({ index: 1, errors: {}, userId: res.data.userId });
            let prog = document.getElementById("progress");
            // prog.style.marginLeft = "20em";
            prog.className = "move1";
          } else {
            console.log(res.data);
            this.setState({ errors: res.data });
          }
        })
        .catch((err) => console.log(err));
    } else {
      this.setState({ index: 1 });
      let prog = document.getElementById("progress");
      prog.className = "move1";
    }
  };
  back1_method = () => {
    this.setState({ index: 0 });
    let prog = document.getElementById("progress");
    prog.className = "back1";
    // prog.style.marginLeft = "0em";
  };
  next2_method = () => {
    if (this.state.schoolcode === "") {
      axios
        .post("/school/register", {
          name: this.state.schoolname,
          province: this.state.province,
          district: this.state.district,
          sector: this.state.sector,
        })
        .then((res) => {
          if (res.data.success) {
            axios
              .post("/user/addcode", {
                code: res.data.schoolcode,
                userId: this.state.userId,
              })
              .then((res) => {
                if (res.data.success) {
                  this.setState({
                    index: 2,
                    errors: {},
                    schoolcode: res.data.schoolcode,
                  });
                  let prog = document.getElementById("progress");
                  prog.className = "move2";
                }
              })
              .catch((err) => console.log(err));
          } else {
            this.setState({ errors: res.data });
          }
        })
        .catch((err) => console.log(err));
      console.log(this.state.schoolcode);
    } else {
      this.setState({ index: 2 });
      let prog = document.getElementById("progress");
      prog.className = "move2";
    }
  };
  back2_method = () => {
    this.setState({ index: 1 });
    let prog = document.getElementById("progress");
    prog.className = "back2";
    // prog.style.marginLeft = "7em";
  };

  handleSubmit = (e) => {
    axios
      .post("/workspace/newspace", {
        name: this.state.wname,
        schoolcode: this.state.schoolcode,
        userId: this.state.userId,
      })
      .then((res) => {
        if (res.data.success) {
          this.setState({ index: 4 });
        } else {
          this.setState({ errors: res.data });
        }
      })
      .catch((err) => console.log(err));
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fileChange = (e) => {
    const formData = new FormData();
    formData.append("userprofile", e.target.files[0]);
    axios
      .post("api/users/profilepic", formData)
      .then((res) => {
        if (res.data.success) {
          this.setState({ profilepic: res.data.picpath });
        }
      })
      .catch((err) => console.log(err));
  };

  spaceProfileChange = (e) => {
    const formData = new FormData();
    formData.append("wprofile", e.target.files[0]);
    axios
      .post("api/workspace/profilepic", formData)
      .then((res) => {
        if (res.data.success) {
          this.setState({ wprofile: res.data.picpath });
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    let showDisplay = null;
    if (this.state.index === 0) {
      showDisplay = (
        <Account
          next1={this.next1_method}
          change={this.onChange}
          data={{
            names: this.state.names,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            profilepic: this.state.profilepic,
          }}
          errors={this.state.errors}
          filechange={this.fileChange}
        />
      );
    }
    if (this.state.index === 1) {
      showDisplay = (
        <SchoolDetails
          next2={this.next2_method}
          back1={this.back1_method}
          change={this.onChange}
          errors={this.state.errors}
          data={{
            name: this.state.schoolname,
            province: this.state.province,
            sector: this.state.sector,
            district: this.state.district,
          }}
        />
      );
    }
    if (this.state.index === 2) {
      showDisplay = (
        <CreateWorkspace
          back2={this.back2_method}
          change={this.onChange}
          filechange={this.spaceProfileChange}
          data={{ wname: this.state.wname, wprofile: this.state.wprofile }}
          errors={this.state.errors}
          handleSubmit={this.handleSubmit}
        />
      );
    }
    // if (this.state.index === 4) {
    //   showDisplay = <Invite code={this.state.schoolcode}/>;
    // }
    return (
      <div className="Wizard">
        <h2>Join Rhinestone</h2>
        {/* <Account /> */}
        {showDisplay}
        <div className="step-row">
          <div id="progress"></div>
          <div className="step-col">
            <small>Account</small>
          </div>
          <div className="step-col">
            <small>School Details</small>
          </div>
          <div className="step-col">
            <small>Create Workspace</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard;
