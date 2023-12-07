import * as dao from "./dao.js";

function BookReviewRoutes(app) {
  const userCreateReview = async (req, res) => {
    try {
      const userId = req.session["currentUser"]._id;
      const bookId = req.params.bookId;
      const reviewContent = req.body.review; // Assuming the review is in the request body
      const newReview = await dao.userCreateReview(userId, bookId, reviewContent);
      res.status(201).json(newReview);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  const userDeleteReview = async (req, res) => {
    try {
      const reviewId = req.params.reviewId;
      await dao.userDeleteReview(reviewId);
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  const userUpdateReview = async (req, res) => {
    const { reviewId } = req.params;
    const status = await dao.userUpdateReview(reviewId, req.body);
    res.json(status);
  };

  const findReviewsByUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      const reviews = await dao.findReviewsByUser(userId);
      res.status(200).json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  const findReviewsByBook = async (req, res) => {
    try {
      const bookId = req.params.bookId;
      const reviews = await dao.findReviewsByBook(bookId);
      res.status(200).json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  app.post("/api/users/:userId/books/:bookId/reviews", userCreateReview);
  app.delete("/api/reviews/:reviewId", userDeleteReview);
  app.put("/api/reviews/:reviewId", userUpdateReview);
  app.get("/api/reviews/users/:userId", findReviewsByUser);
  app.get("/api/reviews/books/:bookId", findReviewsByBook);

}
export default BookReviewRoutes;