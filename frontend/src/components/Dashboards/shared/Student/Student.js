import React, { useState, useEffect } from "react";

const Student = (props) => {
  const [names, setNames] = useState("");
  // const [age, setAge] = useState("");
  // const [country, setCountry] = useState("");
  // const [province, setProvince] = useState("");
  // const [district, setDistrict] = useState("");
  // const [fname, setFname] = useState("");
  // const [mname, setMname] = useState("");
  // const [gname, setGname] = useState("");
  // const [mphone, setMphone] = useState("");
  // const [fphone, setFphone] = useState("");
  // const [gphone, setGphone] = useState("");

  const setEditable = (e) => {
    let classname = e.target.getAttribute("id");
    let el = document.getElementsByClassName(`${classname}`)[0];
    el.setAttribute("contenteditable", true);
    // el[0].contentEditable = "true";
    el.classList.add("editing");
  };

  // const removeEditable = (e) => {
  //   let classname = e.target.getAttribute("id");
  //   let el = document.getElementsByClassName(`${classname}`)[0];
  //   el.setAttribute("contenteditable", true);
  //   el.classList.remove("editing");
  // };

  return (
    <div className="Student">
      <div className="body-container">
        <div className="backward" onClick={props.back}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <div className="remove">
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
        <div className="other">
          <ul>
            <li>
              Names:
              <span
                className="value names"
                value="names"
                onInput={(e) => setNames(e.target.innerText)}
                suppressContentEditableWarning={true}
              >
                {props.student.firstname + " " + props.student.lastname}
              </span>
              <i
                className="fa fa-pencil edit"
                aria-hidden="true"
                id="names"
                onClick={(e) => setEditable(e)}
              ></i>
            </li>
            <li>
              Country:
              <span className="value">{props.student.country}</span>
            </li>
            <li>
              Province:
              <span className="value">{props.student.province}</span>
              <i className="fa fa-pencil edit" aria-hidden="true"></i>
            </li>
            <li>
              District:
              <span className="value">{props.student.district}</span>
              <i className="fa fa-pencil edit" aria-hidden="true"></i>
            </li>
            <li>
              Mother's names:
              <span className="value">{props.student.mothernames}</span>
              <i className="fa fa-pencil edit" aria-hidden="true"></i>
            </li>
            <li>
              Phone number:
              <span className="value">{props.student.mphone}</span>
              <i className="fa fa-pencil edit" aria-hidden="true"></i>
            </li>
            <li>
              Father's names:
              <span className="value">{props.student.fathernames}</span>
              <i className="fa fa-pencil edit" aria-hidden="true"></i>
            </li>
            <li>
              Phone number:
              <span className="value">{props.student.fphone}</span>
              <i className="fa fa-pencil edit" aria-hidden="true"></i>
            </li>
            <li>
              Birth:
              <span className="value">{props.student.dob}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Student;
