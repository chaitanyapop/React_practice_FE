import { useRef, useState } from "react";
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
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

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
  function handleDrop() {
    //debugger;
    let itemsCopy: any = { ...taskState };
    const { column: fromCol, index: fromIndex } = dragItem.current;
    const { column: toCol, index: toIndex } = dragOverItem.current;

    const movedItem = itemsCopy[fromCol].splice(fromIndex, 1)[0];

    itemsCopy[toCol].splice(toIndex, 0, movedItem);

    setTaskState(itemsCopy);

    dragItem.current = null;
    dragOverItem.current = null;
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
        <div
          className="todo-bar"
          onDragEnter={() =>
            (dragOverItem.current = { column: "todo", index: 0 })
          }
          onDragOver={(e) => e.preventDefault()}
          onDragEnd={handleDrop}
        >
          <h3 className="task-header">Todo</h3>
          {taskState.todo.map((value, index) => {
            return (
              <div
                key={String(value.id)}
                draggable
                onDragStart={() => {
                  return (dragItem.current = { column: "todo", index });
                }}
                onDragEnter={() => {
                  console.log({ column: "todo", index });
                  return (dragOverItem.current = { column: "todo", index });
                }}
                onDragEnd={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
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
        <div
          className="inprogress-bar"
          onDragEnter={() =>
            (dragOverItem.current = { column: "inProgress", index: 0 })
          }
          onDragOver={(e) => e.preventDefault()}
          onDragEnd={handleDrop}
        >
          <h3 className="task-header">In Progress</h3>
          {taskState.inProgress.map((value, index) => {
            return (
              <div
                key={String(value.id)}
                draggable
                onDragStart={() => {
                  return (dragItem.current = { column: "inProgress", index });
                }}
                onDragEnter={() =>
                  (dragOverItem.current = { column: "inProgress", index })
                }
                onDragEnd={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
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
        <div
          className="completed-bar"
          onDragEnter={() =>
            (dragOverItem.current = { column: "completed", index: 0 })
          }
          onDragOver={(e) => e.preventDefault()}
          onDragEnd={handleDrop}
        >
          <h3 className="task-header">Completed</h3>
          {taskState.completed.map((value, index) => {
            return (
              <div
                key={String(value.id)}
                draggable
                onDragStart={() => {
                  return (dragItem.current = { column: "completed", index });
                }}
                onDragEnter={() =>
                  (dragOverItem.current = { column: "completed", index })
                }
                onDragEnd={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
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
