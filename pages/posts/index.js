import React from "react";
import AllPosts from "../../components/posts/AllPosts";
const AllPostsPage = ({ posts }) => {
  const DUMMY_POSTS = [
    {
      title: "mes",
      excerpt: "mes mes",
      image: "mes mes.png",
      excerpt: "mes mes excrept",
      id: "12345",
      date: "2022-02-10",
    },
    {
      title: "mes",
      excerpt: "mes mes",
      image: "mes mes.png",
      excerpt: "mes mes excrept",
      id: "123456",
      date: "2022-02-10",
    },
    {
      title: "mes",
      excerpt: "mes mes",
      image: "mes mes.png",
      excerpt: "mes mes excrept",
      id: "1234567",
      date: "2022-02-10",
    },
  ];
  return (
    <div>
      <AllPosts posts={posts} />
    </div>
  );
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const { posts } = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};
export default AllPostsPage;
