import "./style/Comment.css";

function Comment(props) {
  if (!props.comments) {
    return <h1>loading</h1>;
  } else {
    return (
      <div className="comments-container">
        {props.comments.map((comment, index) => (
          <div className="comment" key={index}>
            <div className="comment-top">
              <div id="comment-username">{comment.user.username}</div>
              <div id="comment-created_at">
                {comment.created_at.slice(0, 10)}
              </div>
              {props.currentUser.username === comment.user.username && (
                <div className="comment-edit-del-btn">
                  <button
                    onClick={() => {
                      props.setCommentIdEdit(comment.id);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => props.handleDeleteComment(comment.id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
            <div id="comment-content">{comment.content}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Comment;
