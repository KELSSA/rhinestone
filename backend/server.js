const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

require("./elec-tokens/config/mongodb");
require("./elec-tokens/models/elec-tokens");



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const router = require("./elec-tokens/router/generate-token");
app.use("/elec-tokens",router);

const port = 5000;
app.listen(port, () => console.log("App running on " + port));
