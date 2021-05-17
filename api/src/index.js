const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

//database
require("./database");

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", require("./routes/main.routes"));

app.listen(app.get("port"), () => {
  console.log("Server is Up.");
});
