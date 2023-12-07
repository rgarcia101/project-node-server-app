// reference: bookshelf_items

import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
      user: { type: mongoose.Schema.Types.ObjectId,
        ref: "users" },
      book: { type: mongoose.Schema.Types.ObjectId,
        ref: "books" },
      review: String
    },
    { collection: "reviews" }
);

export default schema;