import "dotenv/config";
import express from 'express';
import session from "express-session";
import Hello from "./hello.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";

//TODO: calling our local db bookbuddies
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/bookbuddies";
const CONNECTION_STRING = "mongodb://127.0.0.1:27017/bookbuddies";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL,
    })
   );
   const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  app.use(session(sessionOptions));
  
  
   
app.use(express.json());

UserRoutes(app);


Hello(app)
app.listen(process.env.PORT || 4000);