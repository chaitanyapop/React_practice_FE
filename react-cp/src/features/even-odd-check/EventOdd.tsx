import { useState } from "react";

function EvenOdd() {
  let [number, setNumber] = useState("");
  let [result, setResult] = useState("");
  let [processFlag, setProcessFlag] = useState(false);
  let [flag, setFlag] = useState(true);
  let message: string;
  function putValue(e: any) {
    setNumber(e.target.value);
    setFlag(false);
  }
  function checkEvenOdd() {
    setProcessFlag(true);
    setResult("");
    let value = number.trim();
    if (value === "" || isNaN(Number(value)) == true) {
      message = "Enter valid number";
    } else {
      if (Number(value) % 2 == 0) {
        setProcessFlag(true);
        message = "Number is Even";
      } else {
        setProcessFlag(true);
        message = "Number is Odd";
      }
    }

    setTimeout(() => {
      setProcessFlag(false);
      setResult(message);
    }, 4000);
  }
  return (
    <div>
      <div>
        <h2>Even or Odd Checker</h2>
        <input
          value={number}
          onChange={putValue}
          placeholder="Enter a number"
        />
        <button disabled={flag} onClick={checkEvenOdd}>
          Check
        </button>
        {result && <p>{result}</p>}
        {processFlag && <p>Checking...</p>}
      </div>
    </div>
  );
}

export default EvenOdd;
