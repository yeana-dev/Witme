import { getUsersPosts } from "../services/posts";
import { getUsersComments } from "../services/comments";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import "./style/User.css";

function User(props) {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await getUsersPosts(props.currentUser.id);
      setPosts(resp);
    };
    fetchPosts();
  }, [props.currentUser]);

  useEffect(() => {
    const fetchComments = async () => {
      const resp = await getUsersComments(props.currentUser.id);
      setComments(resp);
    };
    fetchComments();
  }, [props.currentUser]);

  return (
    <div className="user-detail-container">
      <div className="user-post-container">
        <header>MY POSTS</header>
        {posts.map((post) => (
          <Link
            to={
              post.category.name === "side_project"
                ? `/recruit-side-project/${post.id}`
                : `/study-group/${post.id}`
            }
          >
            <div className="user-post-card">
              <div className="title">{post.title}</div>
              <span className="category">
                {post.category.name === "side_project"
                  ? "PROJECT TEAMS"
                  : "STUDY GROUPS"}
              </span>{" "}
              <span className="created_at">{post.created_at.slice(0, 10)}</span>
            </div>
          </Link>
        ))}
      </div>
      <header>MY COMMENTS</header>
      <div className="user-comment-container">
        {comments.map((comment) => (
          <Link
            to={
              comment.post.category_id === 19
                ? `/study-group/${comment.post.id}`
                : `/recruit-side-project/${comment.post.id}`
            }
          >
            <div className="user-comment-card">
              <div className="content">
                "{comment.content}"{" "}
                <span className="created_at">
                  {comment.created_at.slice(0, 10)}
                </span>
                <div className="from-post">
                  <span className="from">from</span> "{comment.post.title}"
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default User;
