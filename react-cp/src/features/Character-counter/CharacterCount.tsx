import { useState } from "react";
import "./CharacterCount.css";
function CharacterCount() {
  let [charState, setCharState] = useState({
    startChar: 0,
    endChar: 50,
    message: "",
  });
  function endLimitFunc(e: any) {
    setCharState({ ...charState, endChar: e.target.value });
  }
  function limitCalculationFunc(e: any) {
    if (charState.endChar - e.target.value?.length === 1) {
      setCharState({
        ...charState,
        startChar: e.target.value.length,
        message: "You are close to the limit",
      });
    } else if (charState.endChar - e.target.value?.length === 0) {
      setCharState({
        ...charState,
        startChar: e.target.value.length,
        message: "You have reached the limit",
      });
    } else if (charState.endChar - e.target.value?.length < 0) {
      setCharState({
        ...charState,
        startChar: e.target.value.length,
        message: `Limit is exceeded by ${
          e.target.value?.length - charState.endChar
        }`,
      });
    } else {
      setCharState({
        ...charState,
        startChar: e.target.value.length,
      });
    }
  }
  return (
    <div className="char_count_container">
      <h2>Character Count</h2>
      <span>Track your input length with live character warnings.</span>
      <div className="user_input">
        <span>Max Length:</span>
        <input type="number" onChange={endLimitFunc}></input>
      </div>
      <textarea
        placeholder="Start Typing"
        onChange={limitCalculationFunc}
        className="text_area"
      ></textarea>
      <span>{`${charState.startChar} / ${charState.endChar}`}</span>
      {charState.message && <span>{charState.message}</span>}
    </div>
  );
}
export default CharacterCount;
