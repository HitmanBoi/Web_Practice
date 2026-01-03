import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomePage from "./WelcomePage";
import { useEffect } from "react";
import Loader from "./Loader";
import { useState } from "react";

const PostList = () => {
  const { postList, isLoading } = useContext(PostListData);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && postList.length === 0 && <WelcomePage />}
      {!isLoading &&
        postList.map((post) => <Post key={post.id} data={post}></Post>)}
    </>
  );
};

export default PostList;
