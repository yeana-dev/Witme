import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getOnePost } from "../services/posts";
import { getOnePostsComments } from "../services/comments";
import { createComment } from "../services/comments";
import CommentForm from "../components/CommentForm";
import Comment from "../components/Comment";
import "./style/PostDetail.css";
import parse from "html-react-parser";

function PostDetail(props) {
  const [comments, setComments] = useState([]);
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
                <Link to={`/post-edit/${id}`}>
                  <i className="fas fa-edit"></i> Edit
                </Link>
              </div>
            )}
        </div>
        <div className="post-detail-content">{parse(post.content)}</div>
        <CommentForm
          post_id={post.id}
          handleCreateComment={handleCreateComment}
        />
        {!comments ? (
          <h1>No comments</h1>
        ) : (
          <Comment post_id={post.id} comments={comments} />
        )}
      </div>
    );
  }
}

export default PostDetail;
