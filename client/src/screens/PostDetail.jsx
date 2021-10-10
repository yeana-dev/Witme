import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getOnePost } from "../services/posts";
import {
  getOnePostsComments,
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

  useEffect(() => {
    const fetchComments = async () => {
      const resp = await getOnePostsComments(Number(id));
      setComments(resp);
    };
    fetchComments();
  }, [id]);

  const handleCreateComment = async (comment, id) => {
    const newComment = await createComment(comment, id);
    setComments((prevState) => [newComment, ...prevState]);
  };

  const handleUpdateComment = async (id, comment) => {
    const updatedComment = await updateComment(id, comment);
    setComments((prevState) =>
      prevState.map((comment) => {
        return comment.id === id ? updatedComment : comment;
      })
    );
    setCommentIdEdit(0);
  };

  const handleDeleteComment = async (id) => {
    const deletedComment = await deleteComment(id);
    console.log(id);
    setComments((prevState) => {
      prevState.filter((comment) => comment.id !== id);
    });
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
          handleCreateComment={handleCreateComment}
          handleUpdateComment={handleUpdateComment}
          commentIdEdit={commentIdEdit}
          comments={comments}
        />
        <Comment
          post_id={post.id}
          comments={comments}
          currentUser={props.currentUser}
          handleDeleteComment={handleDeleteComment}
          setCommentIdEdit={setCommentIdEdit}
        />
      </div>
    );
  }
}

export default PostDetail;
