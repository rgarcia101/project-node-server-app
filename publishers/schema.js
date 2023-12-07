import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
      },
      apiId: String,
      name: String
    },
    { collection: "publishers" }
);

export default schema;