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
    // if the state of commentIdEdit is more than 0, (meaning user clicked edit button for comment),
    // find the comment with the current commentIdEdit value(id)
    if (props.commentIdEdit >= 1) {
      const comment = props.comments.find(
        (comment) => comment.id === props.commentIdEdit
      );
      // fill the form with the content of found comment.
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
        // if state of commentIdEdit is not 0 (0 meaning no comment selected)
        // run PUT method for selected comment with ID that is set to state.
        if (props.commentIdEdit >= 1) {
          props.handleUpdateComment(props.commentIdEdit, commentForm);
          // Clear the comment form after comment is updated
          setCommentForm({ content: "" });
          props.setCommentIdEdit(0);
        } else {
          props.handleCreateComment(commentForm, props.post_id);
          // Clear the comment form after comment is created
          setCommentForm({ content: "" });
        }
      }}
    >
      <input
        // disable comment form if the user is not logged in
        disabled={props.currentUser ? false : true}
        type="text"
        autoComplete="off"
        id="comment-form-input"
        // letting user know that only logged in user can comment
        placeholder={
          props.currentUser ? "New comment" : "Login to leave a comment!"
        }
        onChange={handleChange}
        value={commentForm.content}
      />
      <input
        type="submit"
        id="comment-form-submit"
        // disable comment form if the user is not logged in
        disabled={props.currentUser ? false : true}
      />
    </form>
  );
}

export default CommentForm;
