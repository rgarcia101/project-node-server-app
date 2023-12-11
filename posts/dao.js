import model from "./model.js";

export const findAllPosts = () => model.find();

export const createPost = (book) =>
    model.create(book);

export const deletePost = (postId) =>
    model.deleteOne({_id: postId});

export const updatePost = (postId, post) =>
    model.updateOne({ _id: postId }, { $set: post });

export const findPostByUserAndBook = (userId, bookId) =>
    model.findOne({ user: userId, apiId: bookId });

export const findPostsByBookApiId = (bookApiId) =>
    model.find({ apiId: bookApiId });