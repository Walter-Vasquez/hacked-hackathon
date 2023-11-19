const express = require("express");
const cors = require("cors");
const { PORT } = require("./utilities/config");
const recipeRouter = require("./controllers/recipes");

const app = express();
app.use(cors());
app.use("/api/recipes", recipeRouter);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
