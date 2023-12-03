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
  const findBookshelfItemsByUser = async (req, res) => {
    const userId = req.params.userId;
    const bookshelf_items = await dao.findBookshelfItemsByUser(userId);
    res.json(bookshelf_items);
  };

  const findUsersThatAddBook = async (req, res) => {
    const bookId = req.params.albumId;

    const likes = await dao.findUsersThatAddBook(bookId);
    res.json(bookshelf_items);
  };

  const deleteBookshelfItem = async (req, res) => {};


  // Routes
  app.post("/api/users/:userId/bookshelf_items/:bookId", createBookshelfItem);
  app.get("/api/users/:userId/bookshelf_items", findBookshelfItemsByUser);
  app.get("/api/likes/:bookId/users", findUsersThatAddBook);
  app.delete("/api/users/:userId/bookshelf_items/:bookId", deleteBookshelfItem);


}
export default BookshelfItemRoutes;