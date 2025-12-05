import { useEffect, useRef, useState } from "react";
import "./WordCounter.css";
function WordCounter() {
  let [wordState, setWord] = useState<any>([]);
  let [text, setText] = useState<string>("");
  function wordFunc() {
    let cleanText = text
      .toLowerCase()
      .replace(/[^a-zA-Z\s]/g, "")
      .trim(); // this is used to make all words in lower case, remove special characters and remove space in start and end
    let words = cleanText.split(/\s+/).filter((val: any) => val.length > 0); // this creates an array or splits on the basis of one or more space

    let wordsMap = new Map();
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
    } /*map is used because it has advantage over using normal object
    1. key can be of any type in object it should only be string
    2. we have built in methods whereas for objects we have to do it manually
    3. Built-in size property 
    4. Maintains the order in a way we have entered */
    const sortedArray = Array.from(wordsMap.entries()).sort(
      (a, b) => b[1] - a[1]
    ); // sort by descending count );
    /*[
  ["hello", 3],
  ["world", 2],
  ["react", 5]
]
Comparison run:

js
Copy code
b[1] - a[1] = 3 - 2 = 1 > 0  → put "hello" before "world"
b[1] - a[1] = 3 - 5 = -2 < 0 → put "react" before "hello" */
    setWord(sortedArray);
    console.log(wordState);
  }

  useEffect(() => {
    wordFunc();
  }, [text]);
  return (
    <div>
      <div>
        <textarea
          placeholder="Enter text"
          className="text-field"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div>
        {wordState.length > 0 && (
          <ul>
            {wordState.map((item: any) => {
              let [word, count] = item;
              return (
                <li key={word}>
                  <strong>{word}</strong>: {count}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
export default WordCounter;
