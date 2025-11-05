import { useEffect, useState } from "react";

function usePrevious(countState: number | null) {
  let [prevState, setPrevState] = useState(countState);
  useEffect(() => {
    setPrevState(countState);
  }, []);

  return { prevState: prevState, setprevState: setPrevState };
}

export default usePrevious;
