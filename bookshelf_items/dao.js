// Reference: https://github.com/jannunzi/kanbas-node-server-app-cs5610-fa23/blob/a6/likes/dao.js

import model from "./model.js";

export const createBookshelfItem = (userId, bookId) =>
    model.create({ user: userId, bookId: bookId });

export const findBookshelfItemsByUser = (userId) => model.find({ user: userId });

// How an author can find people to post to
export const findUsersThatAddBook = (bookId) =>
    model.find({ bookId: bookId }).populate("user");


export const deleteBookshelfItem = (userId, bookId) =>
    model.deleteOne({ user: userId, bookId: bookId });