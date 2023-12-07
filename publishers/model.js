import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("publishers", schema);
export default model;