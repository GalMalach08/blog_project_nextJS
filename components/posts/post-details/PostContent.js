import React from "react";
import PostHeader from "./PostHeader";
import classes from "./post-content.module.css";
import ReactMarkDown from "react-markdown";
const PostContent = ({ post }) => {
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={`/images/posts/${post.image}`} />
      <ReactMarkDown>{post.content}</ReactMarkDown>
    </article>
  );
};

export default PostContent;
