import * as dao from "./dao.js";
import {findAllBooksbyUserId} from "./dao.js";

function BookRoutes(app) {

  const findAllBooks = async (req, res) => {
    const books = await dao.findAllBooks();
    res.json(books);
  }

  const findAllBooksbyUserId = async (req, res)=> {
    const books = await dao.findAllBooksbyUserId(userId);
    res.json(books);
  }

  const findAllUsersByBookId = async (req, res)=> {
    const users = await dao.findAllUsersByBookId(bookId);
    res.json(users);
  }



  const saveBook = async (req, res) => {
    const book = await dao.saveBook(req.body);
    res.json(book);
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
    const status = await dao.updateBook(BookId, req.body);
    res.json(status);
  };






  const deleteBook = async (req, res) => {
    const status = await dao.deleteBook(req.params.bookId);
    res.json(status);
  };

  app.post("/api/books", saveBook);
  app.put("/api/books/:bookId", updateBook);
  app.get("/api/books", findAllBooks);
  app.get("/api/books/:userId", findAllBooksbyUserId());
  app.get("/api/users/:bookId", findAllUsersByBookId());
  app.get("/api/books/:id", findBookById);
  app.delete("/api/books/:id", deleteBook);
}
export default BookRoutes;