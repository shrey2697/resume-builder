import React, { useRef, useState } from "react";
import { Github } from "../Github/Github";
import { Heading } from "../Heading";
import { Mail } from "../Mail";
import { Phone } from "../Phone";
import { Location } from "../Location";
import { Linkedin } from "../Linkedin";
import { SocialMedia } from "../SocialMedia";
import "./styles.css";

const SocialMediaIcon = {
  mail: <Mail />,
  phone: <Phone />,
  location: <Location />,
  github: <Github />,
  linkedin: <Linkedin />,
};

export const SidePanel = ({ data }) => {
  const SidePanelData = data.sidepanel;
  const [uploadView, setUploadView] = useState(false);
  const fileRef = useRef();
  const [Photo, setPhoto] = useState(null);
  return (
    <div className="SidePanel">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          onMouseEnter={() => setUploadView(true)}
          onMouseLeave={() => setUploadView(false)}
          onClick={() => {
            if (uploadView) {
              fileRef.current.click();
            }
          }}
          style={{ position: "relative" }}
        >
          <img
            src={
              Photo ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagq75EME1kWk3X5lPNhd25JNKIXuEjDzC98MIGp_8ww&s"
            }
            alt="profile-pic"
            width={"150px"}
            height="150px"
            style={{ borderRadius: "100%", border: "solid 2px white" }}
          />
          {uploadView && <div className="upload-div">Upload Picture</div>}
          <input
            ref={fileRef}
            type="file"
            style={{ display: "none" }}
            onChange={(e) => {
              setPhoto(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </div>
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
