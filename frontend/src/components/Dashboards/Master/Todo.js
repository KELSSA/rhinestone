import React, { Component } from "react";
import "../../../styles/dos.css";
import guru from "../../../images/guru.png";
import { Link } from "react-router-dom";
import classes from "../../../images/classes.png";
import courses from "../../../images/courses.png";
import teachers from "../../../images/teachers.png";
import todo from "../../../images/todo.png";
import Input from "./Input";
import ListTodo from "./ListTodo";
import axios from "axios";

import Sidebar from "./Sidebar";
import Layout from "../shared/Layout";

class Todo extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.getTodos();
  }
  getTodos = () => {
    axios
      .get("http://localhost:500/todo/all")
      .then((res) => {
        if (res.data) {
          this.setState({
            todos: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  deleteTodo = (id) => {
    axios
      .delete(`http://localhost:500/todo/delete/${id}`)
      .then((res) => {
        if (res.data) {
          this.getTodos();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { todos } = this.state;
    return (
      <div className="wrapper">
        <Sidebar active="todo" />
        <div className="right">
          <div className="content">
            <div className="header"></div>

            <div className="todoWrapper">
              <p className="heading">My tasks</p>
              <Input getTodos={this.getTodos} />
              <ListTodo todos={todos} deleteTodo={this.deleteTodo} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
