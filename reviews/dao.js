// Reference: Bookshelf Items

import model from "./model.js";

export const createReview = (userId, bookId) =>
    model.create({ user: userId, bookId: bookId });


export const deleteReview = (userId, bookId) =>
    model.deleteOne({ user: userId, bookId: bookId });

export const findReviewsByBook = (bookId) => model.find({ user: bookId });

export const updateReview = (userId, bookId) =>
    model.updateOne({ _id: userId },{ book: bookId }, { $set: review });

