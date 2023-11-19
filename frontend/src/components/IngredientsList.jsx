/* eslint-disable react/prop-types */
import Ingredient from "./Ingredient";

const IngredientsList = ({ ingredients }) => {
  return (
    <div id="ingredients-list">
      <h2>List of Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient}></Ingredient>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
