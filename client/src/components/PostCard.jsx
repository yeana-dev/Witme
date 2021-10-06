function PostCard(props) {
  const { post } = props;
  return (
    <div className="post-card">
      <div className="title">{post.title}</div>
      <div className="author">{post.user.username}</div>
      <div className="created_at">{post.created_at.slice(0, 10)}</div>
      <div className="content">{post.content}</div>
    </div>
  );
}

export default PostCard;
