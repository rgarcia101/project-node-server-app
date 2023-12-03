import "dotenv/config";
import express from 'express';
import Hello from "./hello.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";

//TODO: calling our local db bookbuddies
mongoose.connect("mongodb://127.0.0.1:27017/bookbuddies");
const app = express();
app.use(cors());
app.use(express.json());
UserRoutes(app);


Hello(app)
app.listen(process.env.PORT || 4000);