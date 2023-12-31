import * as dao from "./dao.js";

function BookRoutes(app) {

  const findAllBooks = async (req, res) => {
    const books = await dao.findAllBooks();
    res.json(books);
  }

  const findAllBooksByApiId = async (req, res) => {
    const { id } = req.params;
    const books = await dao.findAllBooksByApiId({apiId: id});
    console.log(books);
    if (!books) {
      res.status(404).send("Books not found");
      return;
    }
    res.json(books);
  };

  const saveBook = async (req, res) => {
    const book = await dao.saveBook(req.body);
    res.json(book);
  };

  const deleteBook = async (req, res) => {
    const status = await dao.deleteBook(req.params.bookId);
    res.json(status);
  };

  const findBookById = async (req, res) => {
    const { id } = req.params;
    const book = await dao.findBookById(id);
    if (!book) {
      res.status(404).send("Book not found");
      return;
    }
    res.json(book);
  };

  const updateBook = async (req, res) => {
    const { bookId } = req.params;
    const status = await dao.updateBook(bookId, req.body);
    res.json(status);
  };

  app.post("/api/books", saveBook);
  app.delete("/api/books/:id", deleteBook);
  app.put("/api/books/:bookId", updateBook);
  app.get("/api/books", findAllBooks);
  app.get("/api/books/api/:id", findAllBooksByApiId);
  app.get("/api/books/:id", findBookById);

}
export default BookRoutes;