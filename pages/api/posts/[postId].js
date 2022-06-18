// api/posts
import connectDB from "../../models";
import Post from "../../models/Post";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const post = await Post.findById(req.query.postId);
      res.send({ post });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
};

export default connectDB(handler);
