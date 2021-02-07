const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

require("./config/mongodb");
require("./models/Todo");
require("./models/User");
require("./models/School");
require("./models/WorkSpace");
require("./models/Student");
require("./models/Class");

const router = require("./routes/todo");
const route = require("./routes/auth");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/todo", router);
app.use("/user", route);
app.use("/school", require("./routes/school"));
app.use("/workspace", require("./routes/workspace"));
app.use("/students", require("./routes/student"));
app.use("/class", require("./routes/class"));

const port = 5000;
app.listen(port, () => console.log("App running on " + port));
