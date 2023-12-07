import model from "./model.js";

export const userCreateReview = (userId, bookId, reviewContent) =>
    model.create({ user: userId, book: bookId, review: reviewContent });

export const userDeleteReview = (reviewId) =>
    model.deleteOne({ _id: reviewId });

export const userUpdateReview = (reviewId, review) =>
    model.updateOne({ _id: reviewId }, { $set: review });

export const findReviewsByUser = (userId) =>
    model.find({ user: userId });

export const findReviewsByBook = (bookId) =>
    model.find({ book: bookId });

