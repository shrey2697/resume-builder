import React, { useEffect, useState } from "react";
import { Content } from "./components/Content";
import "./App.css";
import { SidePanel } from "./components/SidePanel/SidePanel";
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";

function App() {
  const [resumeJson, setResumeJson] = useState(null);

  return (
    <div className="App">
      <div style={{ width: "45%" }} id="no-print">
        <input
          type={"file"}
          accept=".json"
          onChange={(e) => {
            let file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (e) {
              setResumeJson(JSON.parse(e.target.result));
            };
            reader.onerror = function (e) {
              alert("Error reading the file");
            };
          }}
        />
        <button
          id="download"
          onClick={() => {
            const element = document.createElement("a");
            const textFile = new Blob([JSON.stringify(resumeJson)], {
              type: "text/plain",
            });
            element.href = URL.createObjectURL(textFile);
            element.download = "userFile.json";
            document.body.appendChild(element);
            element.click();

            window.print();
          }}
        >
          SAVE CHANGES & DOWNLOAD RESUME
        </button>
        {resumeJson && (
          <Editor
            value={resumeJson}
            onChange={(tt) => {
              console.log(setResumeJson(tt));
            }}
          />
        )}
      </div>
      {resumeJson && (
        <div className="Resume" id="resume">
          <SidePanel data={resumeJson} />
          <Content data={resumeJson} />
        </div>
      )}
    </div>
  );
}

export default App;
