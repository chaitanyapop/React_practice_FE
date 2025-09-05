import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChipsInput from "./features/chips-input/components/ChipsInput";
import LightDark from "./features/light-dark/components/LightDark";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <ChipsInput></ChipsInput> */}
      <LightDark></LightDark>
    </div>
  );
}

export default App;
