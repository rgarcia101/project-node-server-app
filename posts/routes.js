import * as dao from "./dao.js";
function PostRoutes(app) {

  const findAllPosts = async (req, res) => {
    const posts = await dao.findAllPosts();
    res.json(posts);
  }

  const createPost = async (req, res) => {
    const post = await dao.createPost(req.body);
    res.json(post);
  };
  const deletePost = async (req, res) => {
    const status = await dao.deletePost(req.params.postId);
    res.json(status);
  };

  const updatePost = async (req, res) => {
    const {postId} = req.params;
    const status = await dao.updatePost(postId, req.body);
    res.json(status);
  };

  app.get("/api/posts", findAllPosts);
  app.post("/api/posts", createPost);
  app.delete("/api/posts/:id", deletePost);
  app.put("/api/posts/:id", updatePost);
}
export default PostRoutes;