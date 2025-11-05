import useClock from "./useClock";
function GreetTimer() {
  let { hours, minutes, seconds } = useClock();
  return (
    <div>
      <p>
        Greet Timer {hours}:{minutes}:{seconds}
      </p>
      {Number(hours) >= 6 && Number(hours) < 12 && <p>Good Morning</p>}
      {Number(hours) >= 12 && Number(hours) <= 16 && <p>Good Afternoon</p>}
      {Number(hours) >= 18 && Number(hours) <= 8 && <p>Good Evening</p>}
      {Number(hours) > 8 && Number(hours) < 6 && <p>Good Night</p>}
    </div>
  );
}

export default GreetTimer;
