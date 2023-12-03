// Reference: https://github.com/jannunzi/kanbas-node-server-app-cs5610-fa23/blob/a6/courses/dao.js
// Changes courses to books. Adapt only required functions.

import model from "./model.js";
export const findBooksByUser = (user) => model.find({ user });
export const createBookByUser = (user, book) =>
    model.create({ ...book, user });
export const findBookById = (id) => model.findById(id);