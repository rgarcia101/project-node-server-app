import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
      user: { type: mongoose.Schema.Types.ObjectId,
        ref: "users" },
      apiId: String,
      title: String,
      author: String,
      postDate: Date,
      text: String
    },
    { collection: "posts" }
);

export default schema;