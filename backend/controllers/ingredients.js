//https://api.spoonacular.com/food/ingredients/search?query=banana
const express = require("express");
const recipeRouter = express.Router();
const { API_KEY, API_PATH } = require("../utilities/config");

recipeRouter.get("/", async (request, response, next) => {
  try {
    let { ingredient } = request.query;

    const url = `${API_PATH}/food/ingredients/search?query=${ingredient}&apiKey=${API_KEY}`;
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();

    return response.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = recipeRouter;
