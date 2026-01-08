import { useEffect, useState } from "react";
import "./TrafficLight.css";
interface Signal {
  red: number;
  green: number;
  yellow: number;
}
type SignalColor = "red" | "green" | "yellow";
function TrafficLight() {
  let signal: SignalColor[] = ["red", "yellow", "green"];
  let [currentSignal, setCurrentSignal] = useState<SignalColor>("red");
  let signalTimer: Signal = {
    red: 5000,
    green: 2000,
    yellow: 1000,
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = signal.indexOf(currentSignal);
      let nextSignal = signal[(currentIndex + 1) % signal.length];
      setCurrentSignal(nextSignal);
    }, signalTimer[currentSignal]);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSignal]);
  return (
    <div className="signal-container">
      <h2>Traffic signal</h2>
      <div className="traffic-signal-outline">
        <div
          className={`${
            currentSignal == "red"
              ? "traffic-signal-circle red-signal"
              : "traffic-signal-circle"
          }`}
          /*className={`${
            currentSignal == "red"
              ? "traffic-signal-circle red-signal"
              : "traffic-signal-circle"
          }`}
        first curly bracses tells I want to add some JS logic. second curly braces are inside string interpolation. In first 
        curely brace we can add JS logic */
        ></div>
        <div
          className={`${
            currentSignal == "yellow"
              ? "traffic-signal-circle yellow-signal"
              : "traffic-signal-circle"
          }`}
        ></div>
        <div
          className={`${
            currentSignal == "green"
              ? "traffic-signal-circle green-signal"
              : "traffic-signal-circle"
          }`}
        ></div>
      </div>
    </div>
  );
}
export default TrafficLight;

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       let currentIndex = signal.indexOf(currentSignal);
//       let nextSignal = signal[(currentIndex + 1) % signal.length];
//       setCurrentSignal(nextSignal);
//     }, signalTimer[currentSignal]);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [currentSignal]);

// Working->
// 1) useEffect runs of first render and if there is a change in dependency value then useEffect will execute
// 2) On first render, timeout will be set, after few seconds callback will execute and it will setCurrentSignal value to the new signal
// 3) Now there is a change in dependency array value therefore cleanup will execute first and it will remove old timer and it will again execute the useEffect and it will set the new timer with new currentSignal value
