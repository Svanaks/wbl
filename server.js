import express from "express";
// import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from 'path';

// const usersRoute = require("./routes/users");
import projectsRoute from "./server/routes/projects";

const app = express();

// Build path
app.use(express.static(path.join(__dirname, "client/build")));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/projects", projectsRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));