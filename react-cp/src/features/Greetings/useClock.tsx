import { useEffect, useState } from "react";

function useClock() {
  let [clockState, setClockState] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setClockState(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const hours = clockState.getHours().toString().padStart(2, "0");
  const minutes = clockState.getMinutes().toString().padStart(2, "0");
  const seconds = clockState.getSeconds().toString().padStart(2, "0");
  return { hours, minutes, seconds };
}
export default useClock;
