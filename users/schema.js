import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    startDate: Date,
    role: {
      type: String,
      enum: ["USER", "AUTHOR", "ADMIN"],
      default: "USER" },
  },
  { collection: "users" });
export default userSchema;

// TODO: Talk to Katie about ommitting image 