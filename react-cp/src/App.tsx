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
import PrevShow from "./features/Previous-value/PrevShow";
import GreetTimer from "./features/Greetings/GreetTimer";
import ProgressBar from "./features/progress-bar/ProgressBar";
import BackToTop from "./features/Back-to-top/BackToTop";
import AstricValidation from "./features/Astric-validation/AstricValidation";
import FrequentlyAsked from "./features/frequently-asked-ques/FrequentlyAsked";
import Sidebar from "./features/Sidebar/Sidebar";
import TrafficLight from "./features/Traffic-light-med/TrafficLight";
import Kanban from "./features/Kanban-board/Kanban";
import WordCounter from "./features/Word-counter/WordCounter";
import JsonValidator from "./features/Json-validator/JsonValidator";
import CinemaHall from "./features/Cinema-hall/CinemaHall";
import MarkDown from "./features/Markdown-editor/MarkDown";
import AutoSave from "./features/Auto-save-form/AutoSave";

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
      {/* <TabSwitch /> */}
      {/* <PrevShow /> */}
      {/* <GreetTimer /> */}
      {/* <ProgressBar /> */}
      {/* <BackToTop /> */}
      {/* <AstricValidation /> */}
      {/* <FrequentlyAsked /> */}
      {/* <Sidebar /> */}
      {/*.......................Medium problems.................. */}
      {/* <TrafficLight />
      <Kanban />
      <WordCounter />
      <JsonValidator /> */}
      {/* <CinemaHall /> */}
      {/* <MarkDown /> */}
      <AutoSave />
    </div>
  );
}

export default App;
