// Source: https://github.com/jannunzi/kanbas-node-server-app-cs5610-fa23/blob/a6/follows/model.js

import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("follows", schema);
export default model;