import React from "react";
import "../../../styles/dos.css";
import guru from "../../../images/guru.png";
import { Link } from "react-router-dom";

function Master() {
  return (
    <div className="wrapper dos">
      <div className="left">
        <div className="profile">
          <img src={guru} alt=" stafguru" />
        </div>

        <ul>
          <Link to="/classes">
            <li> Classes</li>
          </Link>
          <Link to="/teachers">
            <li>Teachers</li>
          </Link>
          <Link to="/courses">
            <li>Courses</li>
          </Link>
          <Link to="/todo">
            <li>Todo</li>
          </Link>
        </ul>
      </div>
      <div className="right">
        <div className="content">
          <div className="header"></div>
        </div>
      </div>
    </div>
  );
}

export default Master;
