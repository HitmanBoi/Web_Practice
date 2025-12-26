import { useContext } from "react"
import Post from "./Post"
import { PostList as PostListData } from "../store/post-list-store"

const PostList = () => {
    const {postList} = useContext(PostListData)
    console.log(postList[0])

    return (
        <>
        {postList.map((post) => <Post key={post.id} data={post}></Post>)}
        </>
    )
}

export default PostList