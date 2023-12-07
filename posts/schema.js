import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
      user: { type: mongoose.Schema.Types.ObjectId,
        ref: "users" },
      postDate: Date,
      post: String
    },
    { collection: "posts" }
);

export default schema;