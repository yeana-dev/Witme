function Comment(props) {
  return (
    <div className="comments-container">
      {props.comments.map((comment, index) => (
        <div className="comment" key={index}>
          <div id="comment-content">{comment.content}</div>
          <div id="comment-username">{comment.user.username}</div>
          <div id="comment-created_at">{comment.created_at.slice(0, 10)}</div>
        </div>
      ))}
    </div>
  );
}

export default Comment;
