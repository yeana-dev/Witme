import "./style/Comment.css";
import { useEffect } from "react";
import { getOnePostsComments, deleteComment } from "../services/comments";

function Comment(props) {
  useEffect(() => {
    const fetchComments = async () => {
      const resp = await getOnePostsComments(props.post_id);
      props.setComments(resp);
    };
    fetchComments();
  }, [props.post_id]);

  const handleDeleteComment = async (id) => {
    await deleteComment(id);
    props.setComments((prevState) => {
      prevState.filter((comment) => comment.id !== id);
    });
  };

  console.log(props.comments);
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
                  <button onClick={() => handleDeleteComment(comment.id)}>
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
