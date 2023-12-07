import model from "./model.js";
export const createBookShelfItem = (userId, bookId) =>
    model.create({ user: userId, book: bookId });

export const deleteBookshelfItem = (itemId) =>
    model.deleteOne({ _id: itemId });

export const findBooksByUser = (userId) =>
    model.find({ user: userId }).populate("book");

export const findUsersByBook = (bookId) =>
    model.find({ bookId: bookId }).populate("user");
