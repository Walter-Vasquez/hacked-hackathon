const express = require("express");
const cors = require("cors");
const { PORT } = require("./utilities/config");

const app = express();
app.use(cors());

/* 
domain: "recipefairy.com", id: "53acb03d6218851f2fc16574c4dfad79",…}
cluster
: 
[]
*/

app.listen(PORT, () => {
  console.log("Server is on port ", PORT);
});
