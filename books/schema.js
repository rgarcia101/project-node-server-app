import mongoose from "mongoose";
const schema = mongoose.Schema(
    {
      title: String,
      author: String,
      apiId: String,
      isbn: String,
      publisher: String,
      image: String,
      dateAdded: Date,
      review: String,
      post: String,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users" }
    },
    {
      collection: "books",
    }
);

export default schema;