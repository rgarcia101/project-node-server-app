// Source: https://github.com/jannunzi/kanbas-node-server-app-cs5610-fa23/blob/a6/follows/schema.js

import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
      follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      followed: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    },
    {
      collection: "follows",
    }
);

export default schema;