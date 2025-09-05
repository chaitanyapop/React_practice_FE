import { useState } from "react";
import "./LightDark.css";
function LightDark() {
  let [mode, setMode] = useState("white");
  function toggleColor() {
    setMode((prevValue) => {
      if (prevValue == "white") {
        document.body.style.backgroundColor = "black";
        return "dark";
      } else {
        document.body.style.backgroundColor = "white";
        return "white";
      }
    });
  }
  return (
    <div>
      <h2
        className={mode == "white" ? "active-light-mode" : "active-dark-mode"}
      >
        Dark Mode Toggle
      </h2>
      <button onClick={toggleColor}>
        {mode == "white" ? "Switch to dark" : "switch to light"}
      </button>
    </div>
  );
}
export default LightDark;
