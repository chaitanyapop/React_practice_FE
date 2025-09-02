import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChipsInput from "./features/chips-input/components/ChipsInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChipsInput></ChipsInput>
    </>
  );
}

export default App;
