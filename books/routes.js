// Reference: https://github.com/jannunzi/kanbas-node-server-app-cs5610-fa23/blob/a6/courses/routes.js
// Changes courses to books. Adapt only required functions.

import * as dao from "./dao.js";

function BookRoutes(app) {
  // Find book by user
  app.get("/api/books", async (req, res) => {
    const user = req.session.currentUser._id;
    const books = await dao.findBooksByUser(user);
    res.json(books);
  });

  // Create book by user
  app.post("/api/books", async (req, res) => {
    const user = req.session.currentUser._id;
    const newBook = await dao.createBookByUser(user, req.body);
    res.json(newBook);
  });

  // Find book by id
  app.get("/api/books/:id", async (req, res) => {
    const { id } = req.params;
    const book = await dao.findBookById(id);
    if (!book) {
      res.status(404).send("Book not found");
      return;
    }
    res.json(book);
  });

  // DO I NEED TO ADD ACTUAL ROUTES?

}
export default BookRoutes;