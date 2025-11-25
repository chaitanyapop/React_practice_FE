import { useState } from "react";
import HideShowCommon from "../../components/HideShowCommon";

function FrequentlyAsked() {
  let [activeIndex, setActiveIndex] = useState(-1);
  let frequentlyAskedQues = [
    {
      question: "What is this app about?",
      answer: "This app helps users track and improve their daily habits.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login screen and follow instructions.",
    },
    {
      question: "Can I use this app offline?",
      answer:
        "Yes, some features are available offline after the initial setup.",
    },
  ];
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {frequentlyAskedQues.map((data, index) => {
        return (
          <HideShowCommon
            header={data.question}
            content={data.answer}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        );
      })}
    </div>
  );
}
export default FrequentlyAsked;
