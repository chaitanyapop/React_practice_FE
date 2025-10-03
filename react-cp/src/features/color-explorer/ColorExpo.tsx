import { useState } from "react";
import "./colorExpo.css";
import colors from "../../assets/colors";
function ColorExpo() {
  let [colorName, setColor] = useState("");
  let [hexCode, setHex] = useState("");
  let [displayColor, setDisplayColor] = useState("");
  let [flag, setFlag] = useState(false);
  function colorValueChangeHandler(e: any) {
    setColor(e.target.value);
    let value = e.target.value.replace(/\s+/g, ""); // to remove white space learn difference between this and trim
    /*Trim removes start and end spaces but does not rmeove spaces in middle but regex removes all the spaces */
    if (colors[value] != undefined) {
      setFlag(false);
      setDisplayColor(value);
      setHex(colors[value]);
    } else {
      setFlag(true);
      setDisplayColor("");
      setHex("");
    }
  }
  return (
    <div className="color_expo_container">
      <div className="child_one_container">
        <h2>Color Explorer</h2>
        <div>
          <input
            placeholder="Enter the color name"
            value={colorName}
            onChange={(e) => {
              colorValueChangeHandler(e);
            }}
          ></input>
        </div>
        <div>
          <div
            className="color_display"
            style={{ backgroundColor: displayColor }}
          ></div>
          {flag == true ? <p>Enter valid color</p> : <p>Name:{colorName}</p>}
          <p>Hex:{hexCode}</p>
        </div>
      </div>
    </div>
  );
}
export default ColorExpo;

/*Imrpovement - 
Instead of creating multiple states try to combine related one in one single object
We can use debouncing instead of checking color on every key store in colors.ts file */
