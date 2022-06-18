import React from "react";
import Hero from "../components/home-page/Hero";
import FeatuerdPosts from "../components/home-page/FeaturedPosts";
// import Post from "./models/Post";

const HomePage = ({ posts }) => {
  console.log(posts);
  // const posts = [
  //   {
  //     title: "mes",
  //     excerpt: "mes mes",
  //     image: "mes mes.png",
  //     excerpt: "mes mes excrept",
  //     id: "12345",
  //     date: "2022-02-10",
  //   },
  //   {
  //     title: "mes",
  //     excerpt: "mes mes",
  //     image: "mes mes.png",
  //     excerpt: "mes mes excrept",
  //     id: "123456",
  //     date: "2022-02-10",
  //   },
  //   {
  //     title: "mes",
  //     excerpt: "mes mes",
  //     image: "mes mes.png",
  //     excerpt: "mes mes excrept",
  //     id: "1234567",
  //     date: "2022-02-10",
  //   },
  // ];
  return (
    <>
      <Hero />
      <FeatuerdPosts posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts/featuredPosts");
  const { posts } = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
};

export default HomePage;
