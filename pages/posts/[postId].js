import React from "react";
import PostContent from "../../components/posts/post-details/PostContent";
const SinglePost = ({ post }) => {
  return (
    <div>
      <PostContent post={post} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/posts`);
  const { posts } = await res.json();
  return {
    fallback: "blocking", // the list might be change
    paths: posts.map((post) => ({
      params: { postId: post._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const { postId } = context.params;
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`);
  const { post } = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};
export default SinglePost;
