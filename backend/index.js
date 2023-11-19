const express = require("express");
const cors = require("cors");
const { PORT } = require("./utilities/config");

const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log("Server is on port ", PORT);
});
