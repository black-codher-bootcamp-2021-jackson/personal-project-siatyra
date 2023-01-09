require("dotenv").config();
require("./models/Profiles"); 

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());

require("./routes/profilesRoutes")(app); 
require("./routes/twitterRoutes")(app);

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
