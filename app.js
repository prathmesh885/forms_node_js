const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("./DB/conn");
app.use(express.json());
//Middleware (We link the)
const pro = require("./router/product");
app.use("/prod", pro);
const PORT = process.env.PORT || 1111;

app.listen(PORT, () => {
  console.log("Server at 1111");
});
