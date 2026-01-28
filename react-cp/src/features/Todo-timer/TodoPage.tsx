import { useRef, useState } from "react";
import "./TodoPage.css";
import TodoData from "../../components/TodoData";
function TodoPage() {
  let [todoData, setTodoData] = useState<any>([]);
  let [task, setTask] = useState("");
  let interval = useRef<any>({});

  function addTask() {
    let data = {
      id: Math.random(),
      taskInfo: task,
      time: "00:00",
      totalSeconds: 0,
    };
    setTodoData([...todoData, data]);
  }

  function deleteTask(id: any) {
    setTodoData((prev: any) => {
      let updatedList = prev.filter((data: any) => data.id != id);
      return updatedList;
    });
  }

  function startTimer(id: any) {
    console.log("This is about start timer", id);
    clearInterval(interval.current[id]);
    interval.current[id] = setInterval(() => {
      setTodoData((prev: any) => {
        return prev.map((todo: any) => {
          if (todo.id == id) {
            const totalSeconds = todo.totalSeconds + 1;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            const formattedString =
              String(minutes).padStart(2, "0") +
              ":" +
              String(seconds).padStart(2, "0");
            return {
              ...todo,
              totalSeconds,
              time: formattedString,
            };
          }
          return todo;
        });
      });
    }, 1000);
  }
  function restartTimer(id: any) {
    console.log("restart");
    setTodoData((prev: any) => {
      return prev.map((todo: any) => {
        if (todo.id == id) {
          return {
            ...todo,
            time: "00:00",
            totalSeconds: 0,
          };
        }
        return todo;
      });
    });
    startTimer(id);
  }
  function resetTimer(id: any) {
    console.log("This is about restart timer", id);
    setTodoData((prev: any) => {
      return prev.map((todo: any) => {
        if (todo.id == id) {
          clearInterval(interval.current[id]);
          return {
            ...todo,
            time: "00:00",
            totalSeconds: 0,
          };
        }
        return todo;
      });
    });
  }
  return (
    <div className="todo-container">
      <div className="width-respective-todo-container">
        <div className="todo-header ">
          <p>
            Build a todo list where each task has its own timer that can be
            started, paused and reset
          </p>
        </div>
        <div className="todo-block">
          <h3 className="todo-block-header">Todo with Timer</h3>
          <div className="input-button-container">
            <input
              className="input-box"
              placeholder="Enter Todo"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            ></input>
            <button className="button" onClick={addTask}>
              Add
            </button>
          </div>
          <div className="todo-list">
            {todoData.map((data: any, i: any) => {
              return (
                <div key={i}>
                  <TodoData
                    todoData={data}
                    startTimer={startTimer}
                    restartTimer={restartTimer}
                    deleteTask={deleteTask}
                    resetTimer={resetTimer}
                  ></TodoData>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoPage;
