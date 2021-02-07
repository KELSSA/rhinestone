import React, { Component } from "react";

import "./Account.css";
import avatar from "./avatar.png";

class Account extends Component {
  // handleChange(){

  // }
  // state = {
  //   names: "n",
  //   email: "n",
  //   password: "n",
  //   password2: "n",
  //   errors: {},
  // };

  // handleClick = (e) => {
  //   // let index = Object.values(this.state).indexOf("n");
  //   let newUser = {
  //     names: this.state.names,
  //     email: this.state.email,
  //     password: this.state.password,
  //     password2: this.state.password2,
  //   };
  //   axios
  //     .post("api/users/register", newUser)
  //     .then((res) => {
  //       if (res.data.success) {
  //         this.props.next1();
  //       } else {
  //         this.setState({ errors: res.data });
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };
  render() {
    return (
      <form
        action=""
        id="Form1"
        className="needs-validation"
        encType="multipart/form-data"
        noValidate
      >
        <h3>Create account</h3>
        <div className="form1">
          <div className="pic">
            <label htmlFor="profilepic" style={{ cursor: "pointer" }}>
              <img
                src={
                  this.props.data.profilepic !== "default"
                    ? "http://localhost:5000/userprofile/" +
                      this.props.data.profilepic
                    : avatar
                }
                alt="pic"
              />
            </label>
            <input
              type="file"
              id="profilepic"
              accept="image/*"
              style={{ display: "none" }}
              onChange={this.props.filechange}
            />
            <div className="text">Choose picture</div>
          </div>

          <div className="form">
            <div className="input">
              <input
                type="text"
                placeholder="Full name"
                name="names"
                value={this.props.data.names}
                className={`form-control ${
                  Object.keys(this.props.errors).indexOf("names") > -1
                    ? "is-invalid"
                    : null
                }`}
                required
                onChange={this.props.change}
              />
              <div className="invalid-feedback">{this.props.errors.names}</div>
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={this.props.data.email}
                className={`form-control ${
                  Object.keys(this.props.errors).indexOf("email") > -1
                    ? "is-invalid"
                    : null
                }`}
                onChange={this.props.change}
                required
              />
              <div className="invalid-feedback">{this.props.errors.email}</div>
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.props.data.password}
                className={`form-control ${
                  Object.keys(this.props.errors).indexOf("password") > -1
                    ? "is-invalid"
                    : null
                }`}
                onChange={this.props.change}
                required
              />
              <div className="invalid-feedback">
                {this.props.errors.password}
              </div>
            </div>
            <div className="input">
              <input
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={this.props.data.password2}
                className={`form-control ${
                  Object.keys(this.props.errors).indexOf("password2") > -1
                    ? "is-invalid"
                    : null
                }`}
                onChange={this.props.change}
                required
              />
              <div className="invalid-feedback">
                {this.props.errors.password2}
              </div>
            </div>

            <div className="btn-box">
              <button type="button" id="Next1" onClick={this.props.next1}>
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Account;
