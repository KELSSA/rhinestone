import React, { useEffect, useState } from "react";
import axios from "axios";

import add from "../../../../images/add.svg";
import Student from "./Student";

const ShowStudents = (props) => {
  const [students, setStudents] = useState([]);
  const [iden, setIden] = useState(0);
  const [pos, setPos] = useState(0);
  useEffect(() => {
    if (!props.cls) {
      axios
        .get("/students/all/2021")
        .then((res) => setStudents(res.data))
        .catch((err) => console.log(err));
    } else {
      setStudents(props.students);
    }
  }, []);
  console.log(students);
  return (
    <>
      {iden === 0 ? (
        <div className="show-students">
          {props.back ? (
            <div className="showback" onClick={props.setback}>
              <i className="fa fa-arrow-left"></i>
            </div>
          ) : null}
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <button className="add" onClick={props.add}>
              <img src={add} alt="add" />
            </button>
          </div>
          <div className="mini-container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="one">
                    #
                  </th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Country</th>
                  <th scope="col">Dob</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, i) => (
                  <tr
                    key={student._id}
                    onClick={() => {
                      setPos(i);
                      setIden(1);
                    }}
                  >
                    <th scope="row">{i + 1}</th>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.country}</td>
                    <td>
                      {Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                      }).format(new Date(student.dob))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Student student={students[pos]} back={() => setIden(0)} />
      )}
    </>
  );
};

export default ShowStudents;
