import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

export default function useToggle(
  inputState: boolean
): [boolean, Dispatch<SetStateAction<boolean>>] {
  let [state, setState] = useState<boolean>(inputState);
  return [state, setState];
}
