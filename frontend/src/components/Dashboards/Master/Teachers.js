import React from "react";

import Sidebar from "./Sidebar";
import Layout from "../shared/Layout";

function Classes() {
  return (
    <Layout clas="teacher">
      <Sidebar active="teacher" />
      <div className="right">
        <div className="content">
          <div className="header"></div>

          <h1 style={{ textAlign: "center" }}> Teacher's panel</h1>
        </div>
      </div>
    </Layout>
  );
}

export default Classes;
