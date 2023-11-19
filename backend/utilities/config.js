require("dotenv").config();

const PORT = process.env.PORT;
const API_PATH = "https://api.spoonacular.com";
const API_KEY = process.env.API_KEY;

module.exports = {
  PORT,
  API_PATH,
  API_KEY,
};
