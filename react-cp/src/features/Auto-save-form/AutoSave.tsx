import { useEffect, useState } from "react";

function AutoSave() {
  let [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    setFormState((prevValue: any) => {
      let data = localStorage.getItem("userData");
      if (data) {
        return JSON.parse(data);
      } else {
        return {
          name: "",
          email: "",
          message: "",
        };
      }
    });
  }, []);

  function valueChange(e: any, value: any) {
    setFormState({ ...formState, [value]: e.target.value });
    localStorage.setItem(
      "userData",
      JSON.stringify({ ...formState, [value]: e.target.value })
    );
  }
  function clearState() {
    localStorage.removeItem("userData");
    setFormState({
      name: "",
      email: "",
      message: "",
    });
  }
  return (
    <div>
      <p>Auto save Form</p>
      <form>
        <div>
          <span>Name:</span>
          <input
            type="text"
            placeholder="Enter name"
            value={formState.name}
            onChange={(e) => {
              valueChange(e, "name");
            }}
          ></input>
        </div>
        <div>
          <span>Email:</span>
          <input
            type="text"
            placeholder="Enter email"
            value={formState.email}
            onChange={(e) => {
              valueChange(e, "email");
            }}
          ></input>
        </div>
        <span>
          <span>Message:</span>
          <textarea
            placeholder="Enter Message.."
            value={formState.message}
            onChange={(e) => {
              valueChange(e, "message");
            }}
          ></textarea>
        </span>
        <div>
          <button type="reset" onClick={clearState}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
export default AutoSave;
