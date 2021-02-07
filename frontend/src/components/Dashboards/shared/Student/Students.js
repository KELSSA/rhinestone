import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import "../../../../styles/dos.css";
import "../../../../styles/students.css";

import Sidebar from "../../Master/Sidebar";
import ShowStudents from "./ShowStudents";
import Layout from "../Layout";
import { credentialContext } from "../../../../App";

const Students = (props) => {
  const [currentTab, setTab] = useState(0);
  const [iden, setIden] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [gname, setGname] = useState("");
  const [mphone, setMphone] = useState("");
  const [fphone, setFphone] = useState("");
  const [gphone, setGphone] = useState("");
  const { credentialState } = useContext(credentialContext);

  useEffect(() => {
    if (iden === 1) {
      showTab(0);
    }
  }, [iden]);

  const validateForm = () => {
    let x,
      y,
      i,
      valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    for (i = 0; i < y.length; i++) {
      if (y[i].value === "") {
        y[i].className += "invalid";
        valid = false;
      }
    }

    return valid;
  };

  const submitHandle = () => {
    const newStudent = {
      firstname: firstname,
      lastname: lastname,
      schoolCode: credentialState.schoolCode,
      country: country,
      district: district,
      province: province,
      mothernames: mname,
      mphone: mphone,
      fathernames: fname,
      fphone: fphone,
      guardian: gname,
      gphone: gphone,
      dob: age,
    };
    axios
      .post("/students/register", newStudent)
      .then((res) => setIden(0))
      .catch((err) => console.log(err));
    return true;
  };

  const showTab = (n) => {
    let x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

    if (n === 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }

    if (n === x.length - 1) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }

    setTab(n);
  };

  const nextPrev = (n) => {
    if (n === 1 && !validateForm()) return false;
    let x = document.getElementsByClassName("tab");
    if (currentTab === x.length - 1) {
      submitHandle();
      return true;
    }
    x[currentTab].style.display = "none";
    if (n === -1) {
      showTab(currentTab - 1);
    } else {
      showTab(currentTab + 1);
    }
  };

  return (
    <Layout clas="students">
      <Sidebar active={props.back ? null : "student"} />
      {iden === 1 && !props.cls ? (
        <div className="right">
          <div className="header">
            <h1 className="text">All Students 2021</h1>
          </div>

          <div className="body-container">
            <div className="backward" onClick={() => setIden(0)}>
              <i className="fa fa-arrow-left"></i>
            </div>
            <div className="content-container">
              <form>
                <div className="tab">
                  <div> Student:</div>
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <input
                    type="date"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <div>Loction:</div>
                  {/* <input
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  /> */}
                  <select
                    id="select_country"
                    onChange={(e) => setCountry(e.target.value)}
                    name="country"
                  >
                    <option value="choose" selected>
                      Choose Country...
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Ghana">Ghana</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="District"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  />
                </div>
                <div className="tab">
                  <div>Parents:</div>
                  <input
                    type="text"
                    placeholder="Father's names"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Father's phone number"
                    value={fphone}
                    onChange={(e) => setFphone(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Mothers's names"
                    value={mname}
                    onChange={(e) => setMname(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Mothers's phone number"
                    value={mphone}
                    onChange={(e) => setMphone(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Guardian names"
                    value={gname}
                    onChange={(e) => setGname(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Guardian's phone number"
                    value={gphone}
                    onChange={(e) => setGphone(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    id="prevBtn"
                    onClick={() => nextPrev(-1)}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    id="nextBtn"
                    onClick={() => nextPrev(1)}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
      {iden === 0 ? (
        <div className="right">
          <div className="show_stu">
            <h1 className="text">All Students 2021</h1>
          </div>
          <ShowStudents
            add={() => setIden(1)}
            back={props.back}
            setback={props.setback}
            students={props.students}
          />
        </div>
      ) : null}
    </Layout>
  );
};

export default Students;
