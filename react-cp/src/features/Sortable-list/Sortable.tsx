import { useCallback, useState } from "react";

function Sortable() {
  let [item, setItem] = useState("");
  let [addedItems, setAddItem] = useState<any>([]);
  function AddItem() {
    if (item != "" && item != null) {
      setAddItem([...addedItems, item]);
    }
  }
  let sorting = useCallback((sortState: "asc" | "dsc") => {
    setAddItem((prev: any) => {
      return [...prev].sort((a: any, b: any) =>
        sortState == "asc"
          ? a
              .toLowerCase()
              .localeCompare(
                b.toLowerCase()
              ) /*This localeCompare logic is same as .sort(num1, num2) =>num1-num2 
          if a comes before b then -ve and if a comes after b then +ve and sort */
          : b.toLowerCase().localeCompare(a.toLowerCase())
      );
    });
  }, []); /*This useCallback creates this function only for the one time when we do add item re-render happens but new reference for this
  function is not created. If we create normal function then it creates new reference for that function gets created and it will 
  cause performance issue if we are passing this function as a prop to the new component */
  return (
    <div>
      <div>
        <h2>Sortable List</h2>
        <input
          type="text"
          placeholder="Add new Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <button onClick={AddItem}>Add Item</button>
        <div>
          <button
            onClick={() => {
              sorting("asc");
            }}
          >
            Sort Ascending
          </button>
          <button
            onClick={() => {
              sorting("dsc");
            }}
          >
            Sort Descending
          </button>
        </div>
      </div>

      <div>
        {addedItems.map((data: any, index: any) => {
          return <p key={index}>{data}</p>;
        })}
      </div>
    </div>
  );
}

export default Sortable;
