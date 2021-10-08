import { Link, useParams } from "react-router-dom";
import "./style/PostDetail.css";
import parse from "html-react-parser";

function PostDetail(props) {
  const { id } = useParams();
  const post = props.posts.find((post) => post.id === Number(id));
  const skillsArray = post.skills.split(",");
  console.log(skillsArray);
  return (
    <div className="post-detail-container">
      <div className="post-detail-top">
        <div className="post-detail-title">{post.title}</div>
        <div className="post-detail-username-date">
          <div className="post-detail-user">{post.user.username}</div>
          <div className="post-detail-date">{post.created_at.slice(0, 10)}</div>
        </div>
      </div>
      <div className="post-detail-skills">
        {skillsArray.map((skill, index) => (
          <div className="skills-button" key={index}>
            {skill}
          </div>
        ))}
      </div>
      <div className="post-detail-content">{parse(post.content)}</div>
      {props.currentUser &&
        post.user.username === props.currentUser.username && (
          <Link to={`/post-edit/${id}`}>Edit</Link>
        )}
    </div>
  );
}

export default PostDetail;
