import * as dao from "./dao.js";

function PostRoutes(app) {

  const userCreatePost = async (req, res) => {
    try {
      const user = req.session["currentUser"]._id;
      const postContent = req.body.post; // Assuming the post content is in the request body
      const newPost = await dao.userCreatePost(user, postContent);
      res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };
  const userDeletePost = async (req, res) => {
    try {
      const postId = req.params.postId;
      await dao.userDeletePost(postId);
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  const userUpdatePost = async (req, res) => {
    const postId = req.params.postId;
    const status = await dao.userUpdatePost(postId, req.body);
    res.json(status);
  };

  const findPostsByUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      const posts = await dao.findPostsByUser(userId);
      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

  app.post("/api/users/:userId/posts", userCreatePost);
  app.delete("/api/posts/:reviewId", userDeletePost);
  app.put("/api/posts/:postId", userUpdatePost);
  app.get("/api/posts/users/:userId", findPostsByUser);

}
export default PostRoutes;