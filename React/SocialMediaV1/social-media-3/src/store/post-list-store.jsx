import { createContext, useReducer , useState , useEffect } from "react";

export const PostList = createContext({
    postList:[],
    addPost : ()=> {},
    deletePost : ()=> {},
    getInitialPosts : ()=> {},
})


const postListReducer = (currPosts, action) => {
    let newPosts = currPosts
    if(action.type === "DELETE_POST") {
        newPosts = newPosts.filter(i=> i.id != action.payload.id)
        return newPosts
    }else if(action.type === 'ADD_POST'){
        newPosts = [action.payload , ...newPosts]
        return newPosts
    }else if(action.type === 'GET_INITIAL_POSTS'){
        newPosts = action.payload
        return newPosts
    }
}

const PostListProvider = ({children}) => {


    const [postList,dispatchPostList] = useReducer(postListReducer,[]);

    const addPost = (pobj) => {
        console.log(pobj)
        dispatchPostList({
            type: 'ADD_POST',
            payload : pobj
        }
        )
    }

    const deletePost = (id) => {
       const deleteAction = {
        type : 'DELETE_POST',
        payload : {
            id,
        }
       }
       dispatchPostList(deleteAction)
    }

    const [isLoading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      let controller = new AbortController();
      let signal = controller.signal;
      fetch("https://dummyjson.com/posts", { signal })
        .then((res) => res.json())
        .then((data) => {
          dispatchPostList({
            type:"GET_INITIAL_POSTS",
            payload: data.posts
          })
          console.log("loading returned");
          setLoading(false);
        });
      return () => {
        console.log("cleaning up");
        controller.abort();
      };
    }, []);

    return (

        <PostList.Provider value={{postList,isLoading,addPost,deletePost}}>
            {children}
        </PostList.Provider>
    )
}

export default PostListProvider;