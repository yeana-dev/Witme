import "./style/Comment.css";
import { useEffect } from "react";
import { getOnePostsComments } from "../services/comments";

function Comment(props) {
  useEffect(() => {
    const fetchComments = async () => {
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
              {props.currentUser &&
                props.currentUser.username === comment.user.username && (
                  <div className="comment-edit-del-btn">
                    <i
                      className="far fa-edit"
                      onClick={() => {
                        window.scrollTo(0, 0);
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
