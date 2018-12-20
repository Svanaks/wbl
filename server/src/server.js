import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from 'path';
import keys from '../../config/keys';

// const usersRoute = require("./routes/users");
import routes from "./routes";

const app = express();

// Build path
app.use(express.static(path.join(__dirname, "client/build")));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = keys.mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/", routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));