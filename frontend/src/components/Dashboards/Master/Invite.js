import React from "react";

import Sidebar from "./Sidebar";
import Layout from "../shared/Layout";

function Invite() {
  return (
    <Layout clas="teacher">
      <Sidebar active="invite" />
      <div className="right">
        <div className="content">
          <div className="header"></div>

          <h1 style={{ textAlign: "center" }}> invite's panel</h1>
        </div>
      </div>
    </Layout>
  );
}

export default Invite;
