import React from "react";
export const SocialMedia = ({ icon, link }) => {
  // Your component logic goes here
  return (
    <div
      style={{
        display: "flex",
        fontSize: "12px",
        margin: "8px 0px",
        alignItems: "center",
      }}
    >
      <div>{icon}</div>

      <a
        href={link}
        style={{ marginLeft: "5px", textDecoration: "none", color: "#d0dbe5" }}
      >
        {link}
      </a>
    </div>
  );
};
