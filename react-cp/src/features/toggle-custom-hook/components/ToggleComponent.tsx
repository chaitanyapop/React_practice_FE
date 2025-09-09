import useToggle from "../custom-hook/useToggle";

export default function ToggleComponent() {
  let [state, setState] = useToggle(false);
  function changeState() {
    console.log(state);
    setState(!state);
  }
  return (
    <div>
      <p>Click to toggle {state}</p>
      <button onClick={changeState}>{state ? "OFF" : "ON"}</button>
    </div>
  );
}
