import model from "./model.js";


export const saveBook = (book) => model.create(book);

export const findBookById = (id) => model.findById(id);
export const deleteBook = (bookId) => model.deleteOne({ _id: bookId });