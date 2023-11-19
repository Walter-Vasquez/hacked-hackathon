//GET https://api.spoonacular.com/recipes/
const express = require("express");
const recipeRouter = express.Router();
const API_KEY = require("../utilities/config").API_KEY;
const PATH = require("../utilities/config").PATH;

recipeRouter.get("/", async (request, response, next) => {
  try {
    /* 
    https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar,+chicken,+paprika&ranking=1&apiKey=d6cee60230f6422ab1d3eefb0ae4fc94
    */
    const body = request.body;
    const resp = await fetch(
      `${PATH}/${recipes}/findByIngredients?ingredients=`
    );
    return response.json({ Hello: "Walter" });
  } catch (error) {
    next(error);
  }
});

module.exports = recipeRouter;
