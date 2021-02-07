import React, { Component } from "react";
import team from "./team.svg";

import "./CreateWorkspace.css";
class CreateWorkspace extends Component {
  render() {
    return (
      <form action="" id="Form3">
        <div className="field">
          <input
            type="text"
            placeholder="Choose name for the workspace"
            name="wname"
            value={this.props.data.wname}
            className={`form-control ${
              Object.keys(this.props.errors).indexOf("wname") > -1
                ? "is-invalid"
                : null
            }`}
            onChange={this.props.change}
            required
          />
          <div className="invalid-feedback">{this.props.errors.wname}</div>
        </div>
        <div className="pic">
          <label htmlFor="wprofile" style={{ cursor: "pointer" }}>
            <img
              src={
                this.props.data.wprofile !== "default"
                  ? "http://localhost:5000/wprofile/" + this.props.data.wprofile
                  : team
              }
              alt="team"
            />
          </label>
          <input
            type="file"
            name="wprofile"
            id="wprofile"
            style={{ display: "none" }}
            onChange={this.props.filechange}
          />
          <div className="text">Workspace profile</div>
        </div>

        <div className="btn-box">
          <button type="button" id="Back2" onClick={this.props.back2}>
            previous
          </button>
          <button type="button" id="Submit" onClick={this.props.handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default CreateWorkspace;
