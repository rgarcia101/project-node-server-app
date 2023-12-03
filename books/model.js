// Reference: https://github.com/jannunzi/kanbas-node-server-app-cs5610-fa23/blob/a6/courses/model.js
// Changes courses to books

import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("books", schema);
export default model;