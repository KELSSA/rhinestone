import React from "react";

import "./WhoAreYou.css";
import teacher from "./assets/teacher.svg";
import master from "./assets/master.svg";
import head from "./assets/head.svg";

const WhoAreYou = (props) => {
  const goToRegister = (value, e) => {
    if (value === "master") {
      props.history.push("/wizard");
    } else {
      props.history.push({ pathname: "/register", state: { rank: value } });
    }
  };
  return (
    <div className="container whoareyou">
      <div className="main">
        <div className="header text-center">Who are you?</div>
        <div className="row circles">
          <div
            className="rounded-circle text-center r-one"
            name="Teacher"
            onClick={(e) => goToRegister("teacher", e)}
          >
            <div className="value">
              <img src={teacher} alt="teacher" />
              <div className="text-center" style={{ marginTop: "2em" }}>
                Teacher
              </div>
            </div>
          </div>
          <div
            className="rounded-circle text-center r-two"
            name="Master"
            onClick={(e) => goToRegister("master", e)}
          >
            <div className="value2">
              <img src={master} alt="master" />
              <div
                className=""
                style={{ marginTop: "1em", marginLeft: "-2em" }}
              >
                Master/Mistress
              </div>
            </div>
          </div>
          <div
            className="rounded-circle text-center"
            name="Dos"
            onClick={(e) => goToRegister("dos", e)}
          >
            <div className="value3">
              <img src={head} alt="teacher" />
              <div className="text-center" style={{ marginTop: "2em" }}>
                Head of Studies
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreYou;
