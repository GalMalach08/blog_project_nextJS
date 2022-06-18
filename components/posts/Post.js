import React from "react";
import Link from "next/link";
import classes from "./post.module.css";
import Image from "next/image";

const Post = (props) => {
  const { image, title, excerpt, date, _id } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className={classes.post}>
      <Link href={`posts/${_id}`}>
        <a>
          <div className={classes.image}>
            <Image
              src="/images/posts/klaylogo.webp"
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Post;
