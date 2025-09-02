import { useState } from "react";
import "../styles/ChipsInput.css";
function ChipsInput() {
  let [chips, setChips] = useState<string[]>([]);
  let [chipValue, setValue] = useState("");

  function keyPress(event: any) {
    const trimmedValue = chipValue.trim();
    if (event.key === "Enter" && trimmedValue != "") {
      setChips([...chips, chipValue]);
      console.log(chips);
    }
  }
  function removeChip(value: string) {
    setChips(chips.filter((data) => data != value));
  }
  return (
    <div className="chips-input-container">
      <div className="header-input-field">
        <h2>Chips Input</h2>
        <input
          type="text"
          placeholder="Add chips"
          className="chips-input-field"
          value={chipValue}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            keyPress(e);
          }}
        ></input>
      </div>

      <div className="chips-field">
        {chips.map((value) => {
          return (
            <div key={Math.random()}>
              <span className="chip">
                <span>{value}</span>
                <span
                  className="cross-symbol"
                  onClick={() => removeChip(value)}
                >
                  X
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChipsInput;
