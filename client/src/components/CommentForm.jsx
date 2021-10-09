import { useState } from "react";
import "./style/CommentForm.css";

function CommentForm(props) {
  const [comment, setComment] = useState({
    content: "",
  });
  const handleChange = (event) => {
    setComment((prevState) => ({
      ...prevState,
      content: event.target.value,
    }));
  };

  return (
    <form
      id="comment-form"
      onSubmit={(event) => {
        event.preventDefault();
        props.handleCreateComment(comment, props.post_id);
        setComment({ content: "" });
      }}
    >
      <input
        type="text"
        id="comment-form-input"
        placeholder="New comment"
        onChange={handleChange}
        value={comment.content}
      />
      <input type="submit" id="comment-form-submit" />
    </form>
  );
}

export default CommentForm;
