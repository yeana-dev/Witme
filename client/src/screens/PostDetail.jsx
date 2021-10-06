import { Link, useParams } from "react-router-dom";

function PostDetail(props) {
  const { id } = useParams();
  const post = props.posts.find((post) => post.id === Number(id));
  console.log(props.currentUser);
  console.log(post);
  return (
    <div className="post-detail-container">
      <div className="post-detail-title">{post.title}</div>
      <div className="post-detail-user">{post.user.username}</div>
      <div className="post-detail-date">{post.created_at.slice(0, 10)}</div>
      <div className="post-detail-skills">{post.skills}</div>
      <div className="post-detail-content">{post.content}</div>
      {props.currentUser &&
        post.user.username === props.currentUser.username && (
          <Link to={`/post-edit/${id}`}>Edit</Link>
        )}
    </div>
  );
}

export default PostDetail;
