const express = require("express");
const cors = require("cors");
const { PORT } = require("./utilities/config");
const recipeRouter = require("./controllers/recipes");
const ingredientsRouter = require("./controllers/ingredients");

const app = express();
app.use(cors());
app.use("/api/recipes", recipeRouter);
app.use("/api/ingredients", ingredientsRouter);

app.listen(PORT, () => {
  console.log("===========Server is running on port ", PORT);
});
