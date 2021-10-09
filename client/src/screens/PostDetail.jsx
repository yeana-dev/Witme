import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { getOnePost } from "../services/posts";
import { getOnePostsComments } from "../services/comments";
import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import "./style/PostDetail.css";
import parse from "html-react-parser";

function PostDetail(props) {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const post = props.posts.find((post) => post.id === Number(id));
  const skillsArray = post.skills.split(",");

  useEffect(() => {
    const fetchComments = async () => {
      const resp = await getOnePostsComments(Number(id));
      setComments(resp);
    };
    fetchComments();
  }, [id]);

  return (
    <div className="post-detail-container">
      <div className="post-detail-top">
        <div className="post-detail-title">{post.title}</div>
        <div className="post-detail-username-date">
          <div className="post-detail-user">{post.user.username}</div>
          <div className="post-detail-date">{post.created_at.slice(0, 10)}</div>
        </div>
      </div>
      <div className="post-detail-title-bottom">
        <div className="post-detail-skills">
          {skillsArray.map((skill, index) => (
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
      <CommentForm setComments={setComments} post_id={post.id} />
      <Comment comments={comments} post_id={post.id} />
    </div>
  );
}

export default PostDetail;
