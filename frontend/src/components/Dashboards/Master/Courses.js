import React from "react";
import { Link } from "react-router-dom";

import Layout from "../shared/Layout";
import Sidebar from "./Sidebar";

function Courses() {
  return (
    <Layout>
      <Sidebar active="courses" />
      <div className="right">
        <div className="content">
          <div className="header"></div>

          <h1 style={{ textAlign: "center" }}>courses panel</h1>
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
