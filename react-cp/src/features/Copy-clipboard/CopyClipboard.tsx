import { useState } from "react";

function CopyClipboard() {
  let [inputState, setInput] = useState("");
  let [displayMessage, setDisplay] = useState("");
  function handleInputChange(e: any) {
    setInput(e.target.value);
  }
  async function onCopyClick() {
    try {
      await navigator.clipboard.writeText(inputState); // this is used to copy text
      setDisplay("Message is copied");
    } catch {
      setDisplay("Error in copy");
    }
  }
  return (
    <div>
      <h2>Copy to the clipboard</h2>
      <textarea
        placeholder="Enter Text"
        value={inputState}
        onChange={handleInputChange}
      ></textarea>
      <button onClick={onCopyClick}>Copy</button>
      {displayMessage && <span>{displayMessage}</span>}
    </div>
  );
}

export default CopyClipboard;
