import { useState, useEffect } from "react";
import "./style/CommentForm.css";

function CommentForm(props) {
  const [commentForm, setCommentForm] = useState({
    content: "",
  });
  const handleChange = (event) => {
    setCommentForm((prevState) => ({
      ...prevState,
      content: event.target.value,
    }));
  };

  useEffect(() => {
    if (props.commentIdEdit >= 1) {
      const comment = props.comments.find(
        (comment) => comment.id === props.commentIdEdit
      );
      setCommentForm({
        content: comment.content,
      });
    }
  }, [props.comments, props.commentIdEdit]);

  return (
    <form
      id="comment-form"
      onSubmit={(event) => {
        event.preventDefault();
        if (props.commentIdEdit) {
          props.handleUpdateComment(props.commentIdEdit, commentForm);
        } else {
          props.handleCreateComment(commentForm, props.post_id);
          setCommentForm({ content: "" });
        }
      }}
    >
      <input
        disabled={props.currentUser ? false : true}
        type="text"
        id="comment-form-input"
        placeholder={
          props.currentUser
            ? "New comment"
            : "Join our community to collaborate!"
        }
        onChange={handleChange}
        value={commentForm.content}
      />
      <input
        type="submit"
        id="comment-form-submit"
        disabled={props.currentUser ? false : true}
      />
    </form>
  );
}

export default CommentForm;
