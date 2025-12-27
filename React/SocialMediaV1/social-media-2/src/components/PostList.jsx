import { useContext } from "react"
import Post from "./Post"
import { PostList as PostListData } from "../store/post-list-store"
import WelcomePage from "./WelcomePage"
import { useEffect } from "react"
import Loader from "./Loader"
import { useState } from "react"

const PostList = () => {
    const {postList,getInitialPosts} = useContext(PostListData)

    console.log(postList)

    const [isLoading , setLoading] = useState(false);


    useEffect( () => {
        setLoading(true)
        let controller = new AbortController();
        let signal = controller.signal
        fetch('https://dummyjson.com/posts' , {signal})
        .then(res => res.json())
        .then((data) => 
            {
                getInitialPosts(data.posts);
                console.log('loading returned')
                setLoading(false)

            });
            return() => {
                console.log('cleaning up');
                controller.abort();
            }
        }

            ,[]
        )


    return (
        <>
        {isLoading && <Loader/>}
        {!isLoading && postList.length === 0 && <WelcomePage/>}
        {!isLoading && postList.map((post) => <Post key={post.id} data={post}></Post>)}
        </>
    )
}

export default PostList