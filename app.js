import "dotenv/config";
import express from 'express'
import Hello from "./hello.js"
import cors from "cors";
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(cors());
app.use(express.json());


Hello(app)
// app.listen(4000)
app.listen(process.env.PORT || 4000);