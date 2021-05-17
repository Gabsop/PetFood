const mongoose = require("mongoose");
const URI = "mongodb://localhost/petfood";

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("debug", true);

mongoose
  .connect(URI)
  .then(() => console.log("Database is up."))
  .catch((err) => console.log(err));
