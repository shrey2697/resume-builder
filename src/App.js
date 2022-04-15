import { Content } from "./components/Content";
import "./App.css";
import { SidePanel } from "./components/SidePanel/SidePanel";

function App() {
  return (
    <div className="App">
      <div className="Resume">
        <SidePanel />
        <Content />
      </div>
    </div>
  );
}

export default App;
