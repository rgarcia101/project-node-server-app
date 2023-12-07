import * as dao from "./dao.js";

function BookRoutes(app) {

  const findBookById = async (req, res) => {
    const { id } = req.params;
    const book = await dao.findBookById(id);
    if (!book) {
      res.status(404).send("Book not found");
      return;
    }
    res.json(book);
  };

  const createBook = async (req, res) => {
    const book = await dao.createBook(req.body);
    res.json(book);
  };

  const deleteBook = async (req, res) => {
    const status = await dao.deleteBook(req.params.bookId);
    res.json(status);
  };

  app.get("/api/books/:id", findBookById);
  app.post("/api/books", createBook);
  app.delete("/api/books/:id", deleteBook);
}
export default BookRoutes;