import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Sidebar from "./Sidebar";
import Students from "../shared/Student/Students";
import Layout from "../shared/Layout";

import { credentialContext } from "../../../App";
import "../../../styles/class.css";

function Classes() {
  const [drop, setDrop] = useState(false);
  const [clasname, setClasname] = useState("");
  const [show, setShow] = useState(0);
  const [students, setStudents] = useState(0);
  const [allclass, setAll] = useState([]);
  const { credentialState } = useContext(credentialContext);
  const addClass = () => {
    axios
      .post("/class/addclass", {
        year: "2021",
        schoolCode: credentialState.schoolCode,
        name: clasname,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const changeView = (classId) => {
    // setShow(1);
    axios
      .get(`class/students/${classId}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`/class/getfrom/${credentialState.schoolCode}`)
      .then((res) => setAll(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {show === 0 ? (
        <Layout clas="classe">
          <Sidebar active="class" />
          <div className="right">
            <div className="content">
              <div className="header">
                <h1 style={{ textAlign: "center", fontSize: "18px" }}>
                  classes
                </h1>
              </div>
              <div className="body-container">
                <div
                  className="add text-center text-warning"
                  onClick={() => setDrop(!drop)}
                >
                  <i className="fa fa-plus mt-2" aria-hidden="true"></i>
                </div>
                <div className={`form ${drop ? "d-block" : "d-none"}`}>
                  <input
                    type="text"
                    placeholder="Class Name"
                    value={clasname}
                    onChange={(e) => setClasname(e.target.value)}
                  />
                  <button className="new_class d-block" onClick={addClass}>
                    Add
                  </button>
                </div>
                <div className="d-flex ml-5 mt-3">
                  {/* <div
                    className="shadow-sm rounded bg-white py-3 px-4 clas text-center mr-5"
                    onClick={changeView}
                  >
                    P1
                  </div> */}
                  {allclass.map((cls) => (
                    <div
                      key={cls._id}
                      className="shadow-sm rounded bg-white py-3 px-4 clas text-center mr-5"
                      onClick={() => changeView(cls._id)}
                    >
                      {cls.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <div>
          <Students
            back={true}
            setback={() => setShow(0)}
            students={students}
          />
        </div>
      )}
    </div>
  );
}

export default Classes;
