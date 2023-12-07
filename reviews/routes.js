// Reference: Bookshelf Items

import * as dao from "./dao.js";
import {createBookReview} from "./dao.js";


function BookReviewRoutes(app) {

  const createReview = async (req, res) => {
    const userId = req.params.userId;
    const bookId = req.params.bookId;
    const reviews = await dao.createReview(userId, bookId);
    res.json(reviews);
  };

  const deleteReview = async (req, res) => {};

  const findReviewsByBook = async (req, res) => {
    const bookId = req.params.bookId;
    const reviews = await dao.findReviewsByBook(bookId);
    res.json(reviews);
  };

  // ADD UPDATE REVIEW


  // REVIEW ROUTES
  app.post("/api/users/:userId/books/:bookId", createReview);
  app.delete("/api/users/:userId/books/:bookId", deleteReview);
  app.get("/api/books/:bookId/book_reviews", findReviewsByBook); // CHECK - return users
  // ADD ROUTE FOR UPDATE REVIEW

}
export default BookReviewRoutes;