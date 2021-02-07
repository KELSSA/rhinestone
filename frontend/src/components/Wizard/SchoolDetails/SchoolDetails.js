import React from "react";

import "./SchoolDetails.css";
const SchoolDetails = (props) => {
  // state = {
  //   schoolname: "n",
  //   province: "n",
  //   district: "n",
  //   sector: "n",
  // };

  //  const onChange = (e) => {
  // this.setState({ [e.target.name]: e.target.value });
  // };

  // handleClick = (e) => {
  //   let index = Object.values(this.state).indexOf("n");
  //   if (index < 0) {
  //     props.next2();
  //   } else {
  //     console.log("Your form is not complete");
  //   }
  // };
  return (
    <form action="" id="Form2">
      <div className="field">
        <input
          type="text"
          placeholder="School name"
          name="schoolname"
          value={props.data.name}
          className={`form-control ${
            Object.keys(props.errors).indexOf("name") > -1 ? "is-invalid" : null
          }`}
          onChange={props.change}
        />
        <div className="invalid-feedback">{props.errors.name}</div>
      </div>
      <div className="field">
        <input
          type="text"
          placeholder="Province"
          name="province"
          value={props.data.province}
          className={`form-control ${
            Object.keys(props.errors).indexOf("province") > -1
              ? "is-invalid"
              : null
          }`}
          onChange={props.change}
        />
        <div className="invalid-feedback" id=" msg">
          {props.errors.province}
        </div>
      </div>
      <div className="field">
        <input
          type="text"
          placeholder="District"
          name="district"
          value={props.data.district}
          className={`form-control ${
            Object.keys(props.errors).indexOf("district") > -1
              ? "is-invalid"
              : null
          }`}
          onChange={props.change}
        />
        <div className="invalid-feedback">{props.errors.district}</div>
      </div>
      <div className="field">
        <input
          type="text"
          placeholder="Sector"
          name="sector"
          value={props.data.sector}
          className={`form-control ${
            Object.keys(props.errors).indexOf("sector") > -1
              ? "is-invalid"
              : null
          }`}
          onChange={props.change}
        />
        <div className="invalid-feedback">{props.errors.sector}</div>
      </div>

      <div className="btn-box">
        <button type="button" id="Back1" onClick={props.back1}>
          previous
        </button>
        <button type="button" id="Next2" onClick={props.next2}>
          Next
        </button>
      </div>
    </form>
  );
};

export default SchoolDetails;
