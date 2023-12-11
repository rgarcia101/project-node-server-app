import model from "./model.js";

export const findAllBooks = () => model.find();
export const findAllBooksByApiId = (apiId) => model.find(apiId);

export const saveBook = (book) => model.create(book);
export const deleteBook = (bookId) =>
    model.deleteOne({ _id: bookId });
export const updateBook = (bookId, book) =>
    model.updateOne({ _id: bookId }, { $set: book });

export const findBookById = (id) => model.findById(id);
