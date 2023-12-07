// Reference: https://github.com/jannunzi/kanbas-node-server-app-cs5610-fa23/blob/a6/likes/model.js

import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("bookshelfItems", schema);
export default model;