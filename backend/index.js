const express = require("express");
const cors = require("cors");

const app = express();
const port = 3003;

app.listen(port, () => {
  console.log("Server is on port ", port);
});
