import "./TodoData.css";

function TodoData({
  todoData,
  startTimer,
  restartTimer,
  deleteTask,
  resetTimer,
}: any) {
  return (
    <div className="todo-block-list">
      <h3 className="block-header">{todoData.taskInfo}</h3>
      <span>{todoData.time}</span>
      <div className="todo-block-buttons">
        <button
          onClick={() => {
            startTimer(todoData.id);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            restartTimer(todoData.id);
          }}
        >
          Restart
        </button>
        <button
          onClick={() => {
            resetTimer(todoData.id);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            deleteTask(todoData.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoData;
