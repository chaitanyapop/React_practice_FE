import { useState } from "react";
import usePrevious from "./usePrevious";
function PrevShow() {
  let [currentState, setCurrentState] = useState(0);
  let prevState = usePrevious(null);
  function onIncrement() {
    prevState.setprevState(currentState);
    setCurrentState(() => currentState + 1);
  }
  function onDecrement() {
    prevState.setprevState(currentState);
    setCurrentState(() => currentState - 1);
  }
  function onReset() {
    setCurrentState(0);
    prevState.setprevState(null);
  }
  return (
    <div>
      <p>Current count:{currentState}</p>
      <p>
        Previous count: {prevState.prevState != null ? prevState.prevState : ""}
      </p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
export default PrevShow;
