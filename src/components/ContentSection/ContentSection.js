import React from "react";
export const ContentSection = ({
  title,
  timespan,
  subtitle,
  description,
  url,
}) => {
  function getSubtitle() {
    if (url) {
      return (
        <a
          href={subtitle}
          target="_blank"
          style={{
            textDecoration: "none",
            color: "#2e2d33",
          }}
          rel="noreferrer"
        >
          {subtitle}
        </a>
      );
    }
    return subtitle;
  }
  // Your component logic goes here
  return (
    <div style={{ margin: "8px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong className="SectionText">{title}</strong>
        <strong className="SectionText">{timespan}</strong>
      </div>
      <strong className="SectionText">{getSubtitle()}</strong>
      <div className="SectionText">{description}</div>
    </div>
  );
};
