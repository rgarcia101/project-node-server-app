// Reference: https://github.com/jannunzi/kanbas-node-server-app-cs5610-fa23/blob/a6/likes/schema.js


import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      bookId: String
    },
    { collection: "bookshelf_items" }
);

export default schema;