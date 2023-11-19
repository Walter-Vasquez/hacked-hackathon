/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Ingredient from "./Ingredient";

const IngredientsList = () => {
  const ingredients = useSelector((state) => state.ingredientsPicked);
  const selectIngredient = (newIngredient) => {};
  return (
    <div id="ingredients-list">
      <h2>List of Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <Ingredient ingredient={ingredient}></Ingredient>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
