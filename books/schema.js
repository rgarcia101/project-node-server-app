import mongoose from "mongoose";
const schema = mongoose.Schema(
    {
      apiId: String,
      title: String,
      author: String
    },
    {
      collection: "books",
    }
);

export default schema;