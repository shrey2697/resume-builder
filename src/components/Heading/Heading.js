import React from "react";
import "./styles.css";

export const Heading = ({ children, mode }) => {
  // Your component logic goes here
  return <div className={`Heading ${mode}`}>{children}</div>;
};
