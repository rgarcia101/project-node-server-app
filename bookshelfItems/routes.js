import * as dao from "./dao.js";

function BookshelfItemRoutes(app) {
  const createBookShelfItem = async (req, res) => {
    try {
      const userId = req.params.userId;
      const bookId = req.body.bookId;  // Assuming you pass bookId in the request body
      const newItem = await dao.createBookShelfItem(userId, bookId);
      res.status(201).json(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  const deleteBookshelfItem = async (req, res) => {
    try {
      const itemId = req.params.itemId;
      await dao.deleteBookshelfItem(itemId);
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  const findBooksByUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      const items = await dao.findBooksByUser(userId);
      res.status(200).json(items);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  const findUsersByBook = async (req, res) => {
    try {
      const bookId = req.params.bookId;
      const users = await dao.findUsersByBook(bookId);
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  app.post("/api/users/:userId/bookshelfItems", createBookShelfItem);
  app.delete("/api/bookshelfItems/:itemId", deleteBookshelfItem);
  app.get("/api/bookshelfItems/users/:userId", findBooksByUser);
  app.get("/api/bookshelfItems/books/:bookId", findUsersByBook);
}

export default BookshelfItemRoutes;