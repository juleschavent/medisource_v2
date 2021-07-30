import { useEffect, useState } from "react";

const useSelection = (e, logSelection) => {
  const [selection, setSelection] = useState("");

  useEffect((e) => {
    setSelection(e.target.value);
    console.log(logSelection, selection);
  }, []);

  return selection;
};

export default useSelection;
