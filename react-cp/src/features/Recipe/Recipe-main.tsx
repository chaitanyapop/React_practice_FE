import axios from "axios";
import { useEffect, useState } from "react";
import RecipeTile from "../common/Recipe-tile";

function RecipeMain() {
  let [allRecipes, setRecipes] = useState([]);
  useEffect(() => {
    axios.get("/assets/receipe.json").then((data: any) => {
      setRecipes(data.data);
    });
  }, []);
  return (
    <div>
      <div>
        <h2>Recipe Explorer</h2>
        <div>
          <select>
            <option>4.9</option>
            <option>4.7</option>
            <option>4.6</option>
            <option>4.5</option>
          </select>
          <span>Cart items:</span>
        </div>
      </div>
      <div>
        <span>Recipe List</span>
        {allRecipes.map((data: any, i: any) => {
          return (
            <div key={i}>
              <RecipeTile data={data}></RecipeTile>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecipeMain;
