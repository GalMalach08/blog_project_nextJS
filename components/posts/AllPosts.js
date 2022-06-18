import React from "react";
import classes from "./allposts.module.css";
import Posts from "./index";
const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All posts</h1>
      <Posts posts={props.posts} />
    </section>
  );
};

export default AllPosts;
