//GET https://api.spoonacular.com/recipes/
const express = require("express");
const recipeRouter = express.Router();
const { API_KEY, API_PATH } = require("../utilities/config");

recipeRouter.get("/", async (request, response, next) => {
  try {
    let { ingredients, ranking } = request.query; //get ingredients as a list from the query
    ingredients = ingredients.split(",").join(",+"); //split ingredients and combine it again with the correct split characters
    ranking = ranking || 1;
    const url = `${API_PATH}/recipes/findByIngredients?ingredients=${ingredients}&ranking=${ranking}&apiKey=${API_KEY}`; //defines url for GET while using the most ingredients (defined by the ranking query value)

    const apiResponse = await fetch(url);
    const data = await apiResponse.json();

    return response.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = recipeRouter;
