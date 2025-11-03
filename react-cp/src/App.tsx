import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChipsInput from "./features/chips-input/components/ChipsInput";
import LightDark from "./features/light-dark/components/LightDark";
import ToggleComponent from "./features/toggle-custom-hook/components/ToggleComponent";
import RecipeMain from "./features/Recipe/Recipe-main";
import EvenOdd from "./features/even-odd-check/EventOdd";
import ColorExpo from "./features/color-explorer/ColorExpo";
import CharacterCount from "./features/Character-counter/CharacterCount";
import CopyClipboard from "./features/Copy-clipboard/CopyClipboard";
import TabSwitch from "./features/Tab-switcher/TabSwitch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <ChipsInput></ChipsInput> */}
      {/* <LightDark></LightDark> */}
      {/* {<ToggleComponent />} */}
      {/* <RecipeMain /> */}
      {/* <EvenOdd /> */}
      {/* <ColorExpo /> */}
      {/* <CharacterCount /> */}
      {/* <CopyClipboard /> */}
      <TabSwitch />
    </div>
  );
}

export default App;
