import React from "react";
import guru from "../../../images/guru.png";
import { Link } from "react-router-dom";
import classes from "../../../images/classes.png";
import courses from "../../../images/courses.png";
import teachers from "../../../images/teachers.png";
import todo from "../../../images/todo.png";

const Sidebar = ({ active }) => {
  const activeone = {
    backgroundColor: "#30475e",
  };
  return (
    <div className="left">
      <div className="profile">
        <img src={guru} alt=" stafguru" />
      </div>

      <ul>
        <Link to="/students" className="current_page">
          <li
            className="list_item"
            style={active === "student" ? activeone : null}
          >
            <img src={classes} alt="classes" className="icon" />
            <span style={{ marginLeft: "1em" }}>Students </span>{" "}
          </li>
        </Link>
        <Link to="/classes" className="current_page">
          <li
            className="list_item"
            style={active === "class" ? activeone : null}
          >
            <img src={classes} alt="classes" className="icon" />
            <span style={{ marginLeft: "1em" }}>Classes </span>{" "}
          </li>
        </Link>
        <Link to="/teachers">
          <li
            className="list_item"
            style={active === "teacher" ? activeone : null}
          >
            <img src={teachers} alt="teachers" className="icon" />
            <span style={{ marginLeft: "0.5em" }}> Teachers </span>{" "}
          </li>
        </Link>
        <Link to="/courses">
          <li
            className="list_item"
            style={active === "courses" ? activeone : null}
          >
            <img src={courses} alt="courses" className="icon" />
            <span style={{ marginLeft: "1.3em" }}>Courses </span>{" "}
          </li>
        </Link>
        <Link to="/todo">
          <li
            className="list_item"
            style={active === "todo" ? activeone : null}
          >
            <img src={todo} alt="todo" className="todo" />
            <span style={{ marginLeft: "1em" }}> Todo</span>{" "}
          </li>
        </Link>
        <Link to="/invite">
          <li
            className="list_item"
            style={active === "invite" ? activeone : null}
          >
            <img src={courses} alt="courses" className="icon" />
            <span style={{ marginLeft: "1.3em" }}>Invite </span>{" "}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
