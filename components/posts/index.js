import React from "react";
import Post from "./Post";
import classes from "./posts.module.css";
const Posts = (props) => {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default Posts;
