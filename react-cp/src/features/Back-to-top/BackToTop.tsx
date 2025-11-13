import { useEffect, useState } from "react";
import "./BackToTop.css";
function BackToTop() {
  let arrayElement = Array.from({ length: 1000 }, (_, i) => i + 1);
  let [buttonState, setButtonState] = useState(false);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    function handleScroll() {
      let percentageScrolled =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      if (percentageScrolled > 50) {
        setButtonState(true);
      } else {
        setButtonState(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="container">
      <h2>Back to top</h2>
      {arrayElement.map((data, i) => {
        return <div key={i}>{data}</div>;
      })}
      {buttonState && (
        <button className="back_to_top" onClick={scrollToTop}>
          Back to top
        </button>
      )}
    </div>
  );
}
export default BackToTop;
