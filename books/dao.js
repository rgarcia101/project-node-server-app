import model from "./model.js";
export const findBookById = (id) => model.findById(id);
export const createBook = (book) => model.create(book);
export const deleteBook = (bookId) => model.deleteOne({ _id: bookId });