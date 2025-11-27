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
