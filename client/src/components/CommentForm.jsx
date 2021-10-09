import { useState } from "react";
import { createComment } from "../services/comments";
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
  const handleSubmit = async (comment, post_id) => {
    const newComment = await createComment(comment, post_id);
    props.setComments((prevState) => [...prevState, newComment]);
  };
  return (
    <form
      id="comment-form"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(comment, props.post_id);
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
