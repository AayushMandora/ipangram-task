const express = require("express");
const connectDB = require("./config/connectDb");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const routes = require("./routes");
const cors = require("cors");

const port = 3000;
const app = express();
dotenv.config();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
