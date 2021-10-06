import { Link, useParams } from "react-router-dom";

function PostDetail(props) {
  const { id } = useParams();
  const post = props.posts.find((post) => post.id === Number(id));
  console.log(props.currentUser);
  console.log(post.user);
  return (
    <div className="post-detail-container">
      <div className="post-detail-title">{post.title}</div>
      {/* <div className="post-detail-user">{post.user.username}</div> */}
      <div className="post-detail-lookingfor">{post.looking_for}</div>
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
