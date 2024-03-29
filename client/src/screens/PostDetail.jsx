import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getOnePost } from "../services/posts";
import {
  updateComment,
  createComment,
  deleteComment,
} from "../services/comments";
import CommentForm from "../components/CommentForm";
import Comment from "../components/Comment";
import "./style/PostDetail.css";
import parse from "html-react-parser";

function PostDetail(props) {
  const [comments, setComments] = useState([]);
  const [commentIdEdit, setCommentIdEdit] = useState(0);
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const resp = await getOnePost(id);
      setPost(resp);
    };
    fetchPost();
  }, [id]);

  const handleCreateComment = async (comment, id) => {
    const newComment = await createComment(comment, id);
    // Add the new comment into comments array
    setComments((prevState) => [newComment, ...prevState]);
  };

  const handleUpdateComment = async (id, comment) => {
    const updatedComment = await updateComment(id, comment);
    setComments((prevState) =>
      prevState.map((comment) => {
        // Update the comments array by look for a comment that is being editted, and edit the comment.
        return comment.id === id ? updatedComment : comment;
      })
    );
  };

  const handleDeleteComment = async (id) => {
    await deleteComment(id);
    // In case user clicks the comment's edit button and deletes, we need to make sure the currnet commentIdEdit is set back to 0
    // Otherwise, the content of the comment will still remains in the comment input
    setCommentIdEdit(0);
    // Remove the deleted comment from comments array to keep them updated without refreshing the page
    setComments((prevState) =>
      prevState.filter((comment) => comment.id !== id)
    );
  };

  if (!post) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="post-detail-container">
        <div className="post-detail-top">
          <div className="post-detail-title">{post.title}</div>
          <div className="post-detail-username-date">
            <div className="post-detail-user">{post.user.username}</div>
            <div className="post-detail-date">
              {post.created_at.slice(0, 10)}
            </div>
          </div>
        </div>
        <div className="post-detail-title-bottom">
          <div className="post-detail-skills">
            {post.skills.split(",").map((skill, index) => (
              <div className="skills-button" key={index}>
                {skill}
              </div>
            ))}
          </div>
          {/* Edit and delete button is only visible to user who is the author of current post.
          Will check if the user is logged in and has same username of current post. */}
          {props.currentUser &&
            post.user.username === props.currentUser.username && (
              <div className="post-detail-edit">
                <button onClick={() => props.handlePostDelete(post.id)}>
                  DELETE
                </button>
                <Link to={`/post-edit/${id}`}>
                  <i className="fas fa-edit"></i> EDIT
                </Link>
              </div>
            )}
        </div>
        <div className="post-detail-content">{parse(post.content)}</div>
        <CommentForm
          post_id={post.id}
          currentUser={props.currentUser}
          handleCreateComment={handleCreateComment}
          handleUpdateComment={handleUpdateComment}
          commentIdEdit={commentIdEdit}
          comments={comments}
          setCommentIdEdit={setCommentIdEdit}
        />
        <Comment
          post_id={post.id}
          currentUser={props.currentUser}
          comments={comments}
          setComments={setComments}
          handleDeleteComment={handleDeleteComment}
          setCommentIdEdit={setCommentIdEdit}
        />
      </div>
    );
  }
}

export default PostDetail;
