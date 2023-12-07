import model from "./model.js";

export const userCreatePost = (userId, newPost) => {
  const postWithDate = {
    user: userId,
    postDate: new Date(),
    post: newPost
  };
  return model.create(postWithDate);
};

export const userDeletePost = (postId) =>
    model.deleteOne({ _id: postId });

export const userUpdatePost = (postId, post) =>
    model.updateOne({ _id: postId }, { $set: post });

export const findPostsByUser = (userId) =>
    model.find({ user: userId }).populate("user");
