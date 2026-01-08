import { useState } from "react";
import TosterReusable from "../../components/TosterReusable";

function Tostermsg() {
  let [message, setMessage] = useState({ color: "", message: "" });
  function updateToster(color: any, message: any) {
    setMessage({ color: color, message: message });
  }
  return (
    <div>
      <div>
        <p>Toster message options</p>
        <button onClick={() => updateToster("red", "Error occured")}>
          Show Error
        </button>
        <button onClick={() => updateToster("green", "Success")}>
          Show Success
        </button>
        <button onClick={() => updateToster("Yellow", "Warning")}>
          Show Warning
        </button>
      </div>
      {message.message != "" && (
        <div>
          <TosterReusable message={message.message} color={message.color} />
        </div>
      )}
    </div>
  );
}
export default Tostermsg;
