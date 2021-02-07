import React from "react";
import { useContext } from "react";
import { credentialContext } from "../../App";
import Master from "./Master/Master";

function Dashboard() {
  const { credentialState } = useContext(credentialContext);
  return (
    <div className="Dashboard">
      {credentialState.rank === "Master" ? <Master /> : <div>Unauthorized</div>}
    </div>
  );
}

export default Dashboard;
