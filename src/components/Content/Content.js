import React from "react";
import { ContentSection } from "../ContentSection";
import { Heading } from "../Heading";
import "./styles.css";

export const Content = ({ data }) => {
  // Your component logic goes here
  const ContentData = data.content;
  return (
    <div className="ContentPanel">
      <div className="ResumeHeader">
        <div className="Name">{ContentData.name}</div>

        <div className="Title">{ContentData.title}</div>
      </div>
      <div className="SidePanelSection">
        <Heading mode="Primary">Summary</Heading>
        <div className="SectionText SectionTextMargin">
          {ContentData.summary}
        </div>
      </div>
      <div className="SidePanelSection">
        <Heading mode="Primary">Experience</Heading>
        {ContentData.experience.map((item) => {
          return (
            <ContentSection
              title={item.title}
              timespan={item.timespan}
              description={item.description}
              subtitle={item.company}
            />
          );
        })}
      </div>

      <div className="SidePanelSection">
        <Heading mode="Primary">Projects</Heading>
        {ContentData.projects.map((item) => {
          return (
            <ContentSection
              title={item.name}
              description={item.description}
              subtitle={item.role}
              timespan={item.timespan}
            />
          );
        })}
      </div>
      <div className="SidePanelSection">
        <Heading mode="Primary">Education</Heading>
        {ContentData.education.map((item) => (
          <ContentSection
            title={item.title}
            timespan={item.timespan}
            description={item.description}
            subtitle={item.college}
          />
        ))}
      </div>
      {ContentData.side_projects.length > 0 && (
        <div className="SidePanelSection">
          <Heading mode="Primary">Open Source / Side Projects</Heading>
          {ContentData.side_projects.map((item) => {
            return (
              <ContentSection
                title={item.name}
                description={item.description}
                subtitle={item.url}
                url
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
