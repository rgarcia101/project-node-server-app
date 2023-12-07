// Reference: https://github.com/jannunzi/kanbas-node-server-app-cs5610-fa23/blob/a6/likes/routes.js

import * as dao from "./dao.js";
import {deleteBookshelfItem, findBookshelfItemsByUser, findUsersThatAddBook} from "./dao.js";


function BookshelfItemRoutes(app) {

  const createBookshelfItem = async (req, res) => {
    const userId = req.params.userId;
    const bookId = req.params.bookId;
    const bookshelf_items = await dao.createBookshelfItem(userId, bookId);
    res.json(bookshelf_items);
  };

  const deleteBookshelfItem = async (req, res) => {};

  const findBookshelfItemsByUser = async (req, res) => {
    const userId = req.params.userId;
    const bookshelf_items = await dao.findBookshelfItemsByUser(userId);
    res.json(bookshelf_items);
  };

  const findUsersThatAddBook = async (req, res) => {
    const bookId = req.params.bookId;
    const bookshelf_items = await dao.findUsersThatAddBook(bookId);
    res.json(bookshelf_items);
  };

  // REVIEW ROUTES
  app.post("/api/users/:userId/books/:bookId", createBookshelfItem);
  app.delete("/api/users/:userId/books/:bookId", deleteBookshelfItem);

  //
  app.get("/api/books/:userId/", findBookshelfItemsByUser);
  app.get("/api/books/:bookId/users", findUsersThatAddBook); // CHECK - return users

}
export default BookshelfItemRoutes;