import React from "react";
import classes from "./featuredPosts.module.css";
import Posts from "../posts";
const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <Posts posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
