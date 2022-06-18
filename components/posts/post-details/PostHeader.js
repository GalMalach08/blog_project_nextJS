import React from "react";
import Image from "next/image";
import classes from "./post-header.module.css";
const PostHeader = (props) => {
  const { title, image } = props;
  return (
    <header>
      <h1 className={classes.header}>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
