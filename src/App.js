import { Content } from "./components/Content";
import "./App.css";
import { SidePanel } from "./components/SidePanel/SidePanel";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

function App() {
  //TODO:
  // function print() {
  //   const input = document.getElementById("resume");
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "JPEG", 0, 0);
  //     // pdf.output('dataurlnewwindow');
  //     pdf.save("download.pdf");
  //   });
  // }
  return (
    <div className="App">
      <button id="download" onClick={() => window.print()}>
        DOWNLOAD RESUME
      </button>
      <div className="Resume" id="resume">
        <SidePanel />
        <Content />
      </div>
    </div>
  );
}

export default App;
