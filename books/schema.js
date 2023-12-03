// Reference: https://github.com/jannunzi/kanbas-node-server-app-cs5610-fa23/blob/a6/courses/schema.js
// Changes courses to books. Adapt only required functions.

import mongoose from "mongoose";
const schema = mongoose.Schema(
    {
      api_book_id: String,
      title: String,
      author: String,
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    },
    {
      collection: "books",
    }
);

export default schema;