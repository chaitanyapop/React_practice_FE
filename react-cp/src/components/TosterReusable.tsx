import { useEffect, useState } from "react";
import "./TosterReusable.css";
function TosterReusable(props: any) {
  let { message, color } = props;
  let [width, setWidth] = useState(100);
  let [visible, setVisible] = useState(true);
  let duration = 5000;
  useEffect(() => {
    setWidth(100);
    setVisible(true);
    const interval = 10;
    const step = (100 / duration) * interval;
    /*
    Step calculation - >
    100 means 100% width now we divide that 100% with by 5ms so in 1ms it should reduce 0.02%.
    The interver is set for 10ms so how much it should reduce in 10ms therefore we multiply by 10ms
     */
    const timer = setInterval(() => {
      setWidth((prev: any) => {
        if (prev <= 0) {
          clearInterval(timer);

          return 0;
        }
        return prev - step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [message]);
  useEffect(() => {
    if (width <= 0) {
      setVisible(false);
    }
  }, [width]);
  return (
    <div>
      {visible && (
        <div className="toster-block" style={{ backgroundColor: color }}>
          {" "}
          {/*style={{ backgroundColor: color }}
        first curly bracses tells I want to add some JS logic. second curly braces tells I want to add some css properties */}
          <div className="message-block">
            <span>{message}</span>
          </div>
          <div className="progress-bar" style={{ width: `${width}%` }}></div>
        </div>
      )}
    </div>
  );
}
export default TosterReusable;

/**
 * How two useEffect runs here ?
 * useEffect only runs when DOM is painted
 * for the first time both useEffect will exeucte.
 * For the first time the first useEffect will start the interval
 * For the first time the second useEffect will execute but width is greater than 0 therefore nothing will happen
 * Now setInterval reduced width to setWidth(99.8%) so first useEffect will not execute because there is no change in message and
 componoent is unmounted and re-mounted
 * for second hook there is a change in width valuue therefore it will execute
 */
