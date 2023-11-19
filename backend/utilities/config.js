require("dotenv").config();

const PORT = process.env.PORT;
const PATH = process.env.PATH;
const API_KEY = process.env.API_KEY;

module.exports = {
  PORT,
  PATH,
  API_KEY,
};
