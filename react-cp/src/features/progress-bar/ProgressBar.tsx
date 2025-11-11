import { useEffect, useState } from "react";
import "./progressBar.css";
function ProgressBar() {
  let [progressbar, setProgressBar] = useState(0);
  useEffect(() => {
    let timeInterval = setInterval(() => {
      setProgressBar((prevVal) => {
        if (prevVal < 100) {
          //   prevVal =
          //     prevVal + 40 > 100
          //       ? prevVal + 40 - (prevVal + 40 - 100)
          //       : prevVal + 40;
          prevVal = Math.min(prevVal + 40, 100);
          return prevVal;
        } else {
          clearInterval(timeInterval);
          return 100;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  return (
    <div>
      <p>Hello progress bar</p>
      <div className="parent_div">
        <div
          className="child_div"
          style={{
            width: `${progressbar}%`,
          }}
        ></div>
      </div>
      <p>{progressbar}%</p>
    </div>
  );
}
export default ProgressBar;
