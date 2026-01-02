import { PostList } from "../store/post-list-store";
import { useContext } from 'react';

const WelcomePage = ( {onGetPostsClick} ) => {
    const {postList} = useContext(PostList)
    return(
        <>
         <p> Welcome to the New Social Media</p>
        </>
    )
}

export default WelcomePage