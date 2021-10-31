import "./style/Comment.css";
import { useEffect } from "react";
import { getOnePostsComments } from "../services/comments";

function Comment(props) {
  useEffect(() => {
    const fetchComments = async () => {
      //  listing comments by using method that grab post's id and list comments that is associated with that post
      const resp = await getOnePostsComments(props.post_id);
      props.setComments(resp);
    };
    fetchComments();
  }, [props.post_id]);

  if (!props.comments) {
    return <h1>loading</h1>;
  } else {
    return (
      <div className="comments-container">
        {props.comments.map((comment, index) => (
          <div className="comment" key={index}>
            <div className="comment-top">
              <div id="comment-username-date">
                <div id="comment-username">{comment.user.username}</div>
                <div id="comment-created_at">
                  {comment.created_at.slice(0, 10)}
                </div>
              </div>
              {/* Edit and delete button is only visible to user who is the author of current comment.
              Will check if the user is logged in and has same username of current comment's author. */}
              {props.currentUser &&
                props.currentUser.username === comment.user.username && (
                  <div className="comment-edit-del-btn">
                    <i
                      className="far fa-edit"
                      onClick={() => {
                        window.scrollTo(0, 0);
                        // When user clicks edit on comment, it will grab the selected comment's id
                        // and set it as commentIdEdit so the comment form can be filled with the comment's current content
                        props.setCommentIdEdit(comment.id);
                      }}
                    ></i>
                    <i
                      className="far fa-trash-alt"
                      onClick={() => props.handleDeleteComment(comment.id)}
                    ></i>
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
