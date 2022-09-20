import React from "react";
export const SocialMedia = ({ icon, link, item }) => {
  const getLink = (item) => {
    if (item === "mail") {
      return `mailto:${link}`;
    }
    if (item === "phone" || item === "location") {
      return null;
    }
    return link;
  };
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
        href={getLink(item)}
        target="_blank"
        style={{ marginLeft: "5px", textDecoration: "none", color: "#d0dbe5" }}
        rel="noreferrer"
      >
        {link}
      </a>
    </div>
  );
};
