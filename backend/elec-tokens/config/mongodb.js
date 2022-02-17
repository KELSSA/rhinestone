const mongoose = require("mongoose");
mongoose.pluralize();
mongoose
  .connect(
    "mongodb://localhost:27017/electricity-tokens",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(" failed to connect to the db"));
