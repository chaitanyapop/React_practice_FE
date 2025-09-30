import { useState } from "react";

function EvenOdd() {
  let [number, setNumber] = useState("");
  let [result, setResult] = useState("");
  let [processFlag, setProcessFlag] = useState(false);
  let [flag, setFlag] = useState(true);
  function putValue(e: any) {
    setNumber(e.target.value);
    setFlag(false);
  }
  function checkEvenOdd() {
    setResult("");
    let value = number.trim();
    if (value.trim() === "" || isNaN(Number(value)) == true) {
      setProcessFlag(true);
      setTimeout(() => {
        setProcessFlag(false);
        setResult("Enter valid number");
      }, 4000);
    } else {
      if (Number(value) % 2 == 0) {
        setProcessFlag(true);
        setTimeout(() => {
          setProcessFlag(false);
          setResult("Number is Even");
        }, 4000);
      } else {
        setProcessFlag(true);
        setTimeout(() => {
          setProcessFlag(false);
          setResult("Number is Odd");
        }, 4000);
      }
    }
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
