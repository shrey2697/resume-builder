import React from "react";
import { Github } from "../Github/Github";
import { Heading } from "../Heading";
import { Mail } from "../Mail";
import { Phone } from "../Phone";
import { Location } from "../Location";
import { Linkedin } from "../Linkedin";
import { SocialMedia } from "../SocialMedia";
import data from "../../ResumeData.json";
import Photo from "../../photo.png";
import "./styles.css";

const SocialMediaIcon = {
  mail: <Mail />,
  phone: <Phone />,
  location: <Location />,
  github: <Github />,
  linkedin: <Linkedin />,
};

export const SidePanel = () => {
  const SidePanelData = data.sidepanel;
  return (
    <div className="SidePanel">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={Photo}
          alt="profile-pic"
          width={"150px"}
          height="150px"
          style={{ borderRadius: "100%", border: "solid 2px white" }}
        />
      </div>

      <div className="SidePanelSection">
        <div>
          <Heading>contact</Heading>
          {Object.keys(SidePanelData.contact).map((item) => {
            return (
              <SocialMedia
                key={item}
                icon={SocialMediaIcon[item]}
                link={SidePanelData.contact[item]}
                item={item}
              />
            );
          })}
        </div>
      </div>
      <div className="SidePanelSection">
        <div>
          <Heading> proficiency </Heading>
          <ul>
            {SidePanelData?.proficiency.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="SidePanelSection">
        <div>
          <Heading> skills </Heading>
          <ul>
            {SidePanelData.skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {SidePanelData.articles.length > 0 ? (
        <div className="SidePanelSection">
          <Heading>Articles</Heading>
          {SidePanelData.articles.map((item) => {
            return (
              <div
                key={item.heading}
                style={{ fontSize: "12px", color: "#d0dbe5", margin: "10px 0" }}
              >
                <strong>{item.heading}</strong>
                <div>{item.body}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
