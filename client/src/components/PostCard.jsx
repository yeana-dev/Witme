import "./style/PostCard.css";
import parse from "html-react-parser";

function PostCard(props) {
  const { post } = props;
  return (
    <div className="post-card">
      <div className="title">{post.title}</div>
      <div className="username">{post.user.username}</div>
      <div className="created_at">{post.created_at.slice(0, 10)}</div>
      <div className="content">
        {parse(post.content.replace(/(<([^>]+)>)/gi, ""))}
      </div>
    </div>
  );
}

export default PostCard;
