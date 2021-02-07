const mongoose = require("mongoose");
mongoose.pluralize();
mongoose
  .connect(
    "mongodb+srv://kellme:letmein3@cluster0.lx7ml.mongodb.net/Transbase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(" failed to connect to the db"));
