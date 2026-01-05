import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomePage from "./WelcomePage";
import { useEffect } from "react";
import Loader from "./Loader";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const {  isLoading } = useContext(PostListData);

  const postList = useLoaderData();



  return (
    <>
      
      {postList.length === 0 && <WelcomePage />}
      {postList.map((post) => <Post key={post.id} data={post}></Post>)}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => {
          return data.posts          
        });
}

export default PostList;
