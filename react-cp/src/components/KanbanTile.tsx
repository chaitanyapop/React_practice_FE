import "./KanbanTile.css";
function KanbanTile(props: any) {
  function clickNext() {
    props.setTaskState((prev: any) => {
      if (prev.todo.some((item: any) => item.id == props.value.id)) {
        return {
          todo: prev.todo.filter((value: any) => value.id != props.value.id),
          inProgress: [...prev.inProgress, props.value],
          completed: [...prev.completed],
        };
      } else {
        return {
          todo: [...prev.todo],
          inProgress: prev.inProgress.filter(
            (value: any) => value.id != props.value.id
          ),
          completed: [...prev.completed, props.value],
        };
      }
    });
  }
  function clickPrev() {
    props.setTaskState((prev: any) => {
      if (prev.inProgress.some((item: any) => item.id == props.value.id)) {
        return {
          todo: [...prev.todo, props.value],
          inProgress: prev.inProgress.filter(
            (value: any) => value.id != props.value.id
          ),
          completed: [...prev.completed],
        };
      } else {
        return {
          todo: [...prev.todo],
          inProgress: [...prev.inProgress, props.value],
          completed: prev.completed.filter(
            (value: any) => value.id != props.value.id
          ),
        };
      }
    });
  }
  function clickDelete() {}
  return (
    <div className="tile-container">
      <div className="tile-header">
        <h3>{props.value.value}</h3>
      </div>
      <div className="tile-buttons">
        {props.next && (
          <button className="button" onClick={clickNext}>
            Next
          </button>
        )}
        {props.prev && (
          <button className="button" onClick={clickPrev}>
            Previous
          </button>
        )}
        <button className="button" onClick={clickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default KanbanTile;
