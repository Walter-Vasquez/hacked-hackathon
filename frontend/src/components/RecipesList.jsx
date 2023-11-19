import Recipe from "./Recipe";

const RecipesList = ({ recipes }) => {
  return (
    <div id="recipes-list">
      <h2>List of Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <Recipe recipe={recipe}></Recipe>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesList;
