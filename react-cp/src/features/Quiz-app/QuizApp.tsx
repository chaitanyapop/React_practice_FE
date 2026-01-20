import { useEffect, useState } from "react";
import { fetchQuestion } from "./Quiz.service";
import "./QuizApp.css";

function QuizApp() {
  let [questionArray, setQuestions] = useState<any>([]);
  let [currentIndex, setCurrentIndex] = useState(0);
  let [selectedAnswer, setAnswer] = useState("");
  let [displayScore, setDisplayScore] = useState(false);
  let [score, setScore] = useState(0);
  let currentQuestion = questionArray[currentIndex];
  useEffect(() => {
    async function fetchData() {
      let data = await fetchQuestion();
      setQuestions(data.data);
    }
    fetchData();
  }, []);
  function submitAnswer() {
    if (selectedAnswer == currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
    questionArray[currentIndex + 1] != undefined
      ? setCurrentIndex((prev) => prev + 1)
      : setDisplayScore(true);
  }
  function playAgain() {
    setCurrentIndex(0);
    setScore(0);
    setDisplayScore(false);
  }
  return (
    <div className="quiz-container">
      <h2 className="header">Quiz App</h2>

      <div className="questions">
        {questionArray.length == 0 ? (
          <p>Loading...</p>
        ) : (
          displayScore == false && (
            <div className="question-container">
              <h3>Question {currentIndex + 1}</h3>
              {currentQuestion.options.map((data: any, i: any) => {
                return (
                  <span>
                    <input
                      type="radio"
                      key={i}
                      onChange={() => setAnswer(data)}
                      value={data}
                      checked={data == selectedAnswer}
                    />
                    {data}
                  </span>
                );
              })}
              <button
                onClick={submitAnswer}
                disabled={selectedAnswer == ""}
                className="button"
              >
                Submit
              </button>
            </div>
          )
        )}
        {displayScore && (
          <div className="question-container">
            <h3>
              Your score : {score}/{questionArray.length}
            </h3>
            <button className="button" onClick={playAgain}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default QuizApp;

{
  /* <div>
        {questionArray.map((data: any, i: any) => {
          return (
            currentIndex == i && (
              <div>
                <h3>Question {i + 1}</h3>
                <p>{data.question}</p>
                {data.option.map((answers: any, j: any) => {
                  return <input type="radio">{answers}</input>;
                })}
                <button>Submit</button>
              </div>
            )
          );
        })}
      </div> 
      
      The above one is one approach but this approach is inefficient */
}
