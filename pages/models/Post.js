import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "You need a title for the article"],
  },
  content: {
    type: String,
    required: [true, "You need a content for the article"],
  },
  excerpt: {
    type: String,
    required: [true, "You need a excerpt for the article"],
  },
  date: {
    type: String,
    default: new Date(),
  },
  image: {
    type: String,
    required: [true, "You need a image for the article"],
  },
  isFeatured: {
    type: Boolean,
    deault: false,
  },
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
