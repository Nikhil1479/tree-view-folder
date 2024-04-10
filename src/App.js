import { Folder } from "./Folder";
import { files } from "./data";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>VS Code Folder Structure</h1>
      <Folder files={files} />
    </div>
  );
}
