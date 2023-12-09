import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
      },
      name: String
    },
    { collection: "publishers" }
);

export default schema;