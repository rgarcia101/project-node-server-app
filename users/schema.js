// Assignment A6 3.2 - adjusted for Project

import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  // All Roles
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  startDate: { type: Date, default: Date.now },
  role: {
    type: String,
    enum: ["USER", "AUTHOR", "ADMIN"],  // Combine all roles into one schema?
    default: "USER" },
  // Users and Authors only
  photo: Buffer,
  // Authors only
  biography: String
  // Admins only - ?
    },
    { collection: "users" }
);
export default userSchema;