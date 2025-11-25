function HideShowCommon(props: any) {
  function handleClick() {
    if (props.activeIndex != props.index) {
      props.setActiveIndex(props.index);
    } else {
      props.setActiveIndex(-1);
    }
  }
  return (
    <div>
      <div onClick={handleClick}>
        <span>{props.header}</span>
        <span>{props.activeIndex == props.index ? "v" : "^"}</span>
      </div>
      {props.activeIndex == props.index && (
        <div style={{ background: "grey" }}>
          <p>{props.content}</p>
        </div>
      )}
    </div>
  );
}
export default HideShowCommon;
