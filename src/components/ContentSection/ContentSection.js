import React from "react";
export const ContentSection = ({ title, timespan, subtitle, description }) => {
  // Your component logic goes here
  return (
    <div style={{ margin: "15px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong className="SectionText">{title}</strong>
        <strong className="SectionText">{timespan}</strong>
      </div>
      <strong className="SectionText">{subtitle}</strong>
      <div className="SectionText">{description}</div>
    </div>
  );
};
