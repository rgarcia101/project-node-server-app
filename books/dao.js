import model from "./model.js";

export const findAllBooks = () => model.find();

// ADD
export const findAllBooksbyUserId = (userId) => model.find(userId);

export const findAllUsersByBookId = (bookId) => model.find(bookId);

export const updateBook = (bookId, book) =>
    model.updateOne({ _id: bookId }, { $set: book });


export const saveBook = (book) => model.create(book);
export const findBookById = (id) => model.findById(id);
export const deleteBook = (bookId) => model.deleteOne({ _id: bookId });