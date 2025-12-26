import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";


const CreatePost = () => {

  const {addPost} = useContext(PostList)

  const userIdElement = useRef()
  const titleElement = useRef()
  const contentElement = useRef()
  const tagsElement = useRef()
  const reactionsElement = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value
    const postTitle = titleElement.current.value
    const postContent = contentElement.current.value
    const tags = tagsElement.current.value.split(" ")
    const reactions = reactionsElement.current.value

    addPost(userId,postTitle,postContent,tags,reactions)

    userIdElement.current.value =""
    titleElement.current.value=""
    contentElement.current.value=""
    tagsElement.current.value=""
    reactionsElement.current.value=""

  }


  return (
    <form className="create-post" onSubmit={handleSubmit}>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="user Id"
          ref={userIdElement}
          placeholder="Enter Your user Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={titleElement}
          placeholder="How are you feeling today ..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="content"
          ref={contentElement}
          placeholder="Tell us more about it..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Post Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Add relevent tags"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Post Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactionsElement}
          placeholder="post reactions"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost
