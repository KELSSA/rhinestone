import React from "react";
import "../../../styles/layout.css";

export default function Layout({ children, clas }) {
  return <div className={`wrapper layout ${clas}`}>{children}</div>;
}
