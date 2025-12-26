import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList:[],
    addPost : ()=> {},
    deletePost : ()=> {},
})

const postListReducer = (currPosts, action) => {
    let newPosts = currPosts
    if(action.type === "DELETE_POST") {
        newPosts = newPosts.filter(i=> i.id != action.payload.id)
        return newPosts
    }else if(action.type === 'ADD_POST'){
        newPosts = [action.payload , ...newPosts]
        return newPosts
    }
}

const PostListProvider = ({children}) => {

    const [postList,dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);

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

    return (

        <PostList.Provider value={{postList,addPost,deletePost}}>
            {children}
        </PostList.Provider>
    )
}

const DEFAULT_POST_LIST = [
    {
    id:'1',
    title:'Going To Mumbai',
    content:'Hi I am going to mumbai to attend upcoming Token2049',
    reaction : 200,
    user_Id : 'user-24',
    tags : ['Web3','Token2049','Mumbai'] 
    },

    {
    id:'2',
    title:'Going To Banglore',
    content:'Hi I am going to mumbai to attend upcoming IBW',
    reaction : 170,
    user_Id : 'user-21',
    tags : ['Web3','IBW','Banglore'] 
    },

]

export default PostListProvider;