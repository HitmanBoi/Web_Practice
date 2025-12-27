import { createContext, useReducer } from "react";

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

    const addPost = (userId , postTitle , content , tags , reactions) => {
        console.log(userId,postTitle,content,tags,reactions)
        dispatchPostList({
            type: 'ADD_POST',
            payload : {
                id : Date.now(),
                title :postTitle,
                content : content,
                reaction : reactions,
                userId : userId,
                tags : tags
            }
        })
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

    const getInitialPosts = (posts) => {
            dispatchPostList({
                type: "GET_INITIAL_POSTS",
                payload : posts,
            });
    }

    return (

        <PostList.Provider value={{postList,addPost,deletePost,getInitialPosts}}>
            {children}
        </PostList.Provider>
    )
}

export default PostListProvider;