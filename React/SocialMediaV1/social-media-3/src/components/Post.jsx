import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({data}) => {
  const {deletePost} = useContext(PostList)
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">{data.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={()=>deletePost(data.id)}>
             <MdDeleteForever/>
          </span>
        </h5>
        <p className="card-text">
         {data.content || data.body}
        </p>
        Tags:
        console.log(data.tags)
        {/* {data.tags.map((tag)=> <span className="badge text-bg-primary hashtag" key={tag}>{tag}</span>)} */}

        <div className="alert alert-success reactions" role="alert">
          {data.reaction || data.reactions.likes } people reacted on this post.
        </div>

      </div>
    </div>
  );
};

export default Post;
