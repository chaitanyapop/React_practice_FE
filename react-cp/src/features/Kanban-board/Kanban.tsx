import { useState } from "react";
import "./Kanban.css";
import KanbanTile from "../../components/KanbanTile";
import type { tasks } from "../../type/interface";
function Kanban() {
  let [taskState, setTaskState] = useState<tasks>({
    todo: [],
    inProgress: [],
    completed: [],
  });
  let [taskEntered, setEnteredTask] = useState("");

  function addTask() {
    setTaskState({
      ...taskState,
      todo: [
        ...taskState.todo,
        {
          id: Math.random(),
          value: taskEntered,
        },
      ],
    });
    console.log(taskState);
  }
  return (
    <div>
      {/*Kanban board add task haeader */}
      <div>
        <h3>Kanban Board</h3>
        <div className="task-add">
          <input
            type="text"
            placeholder="Enter Task"
            className="task-input"
            onChange={(e) => setEnteredTask(e.target.value)}
          ></input>
          <button className="button" onClick={addTask}>
            Add Task
          </button>
        </div>
      </div>
      {/*Kanban board tasks list */}
      <div className="kanban-bars">
        <div className="todo-bar">
          <h3 className="task-header">Todo</h3>
          {taskState.todo.map((value) => {
            return (
              <div key={Math.random()}>
                <KanbanTile
                  value={value}
                  next={true}
                  prev={false}
                  taskState={taskState}
                  setTaskState={setTaskState}
                />
              </div>
            );
          })}
        </div>
        <div className="inprogress-bar">
          <h3 className="task-header">In Progress</h3>
          {taskState.inProgress.map((value) => {
            return (
              <div key={Math.random()}>
                <KanbanTile
                  value={value}
                  next={true}
                  prev={true}
                  taskState={taskState}
                  setTaskState={setTaskState}
                />
              </div>
            );
          })}
        </div>
        <div className="completed-bar">
          <h3 className="task-header">Completed</h3>
          {taskState.completed.map((value) => {
            return (
              <div key={Math.random()}>
                <KanbanTile
                  value={value}
                  next={false}
                  prev={true}
                  taskState={taskState}
                  setTaskState={setTaskState}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Kanban;
