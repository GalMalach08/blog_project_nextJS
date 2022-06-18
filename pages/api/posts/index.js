// api/posts
import connectDB from "../../models";
import Post from "../../models/Post";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const posts = await Post.find();
      res.send({ posts });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
};

export default connectDB(handler);
