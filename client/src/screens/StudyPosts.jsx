import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";
import study_group from "../assets/study_group.png";
import "./style/StudyPosts.css";

function StudyPosts(props) {
  // Display posts that has a category of 'study_group'
  const filteredPosts = props.posts.filter(
    (post) => post.category.name === "study_group"
  );
  return (
    <div className="study-posts-container">
      <div className="posts-top">
        <img src={study_group} alt="study-group-witme" width="300" />
        <div className="posts-top-right">
          <header>Study-Witme!</header>
          <p>Find your next study-mate here!</p>
        </div>
      </div>
      <div className="new-post">
        <Link to="/new-post-study">
          <i className="fas fa-file"></i>&nbsp;&nbsp;NEW POST
        </Link>
      </div>
      <div className="post-card-container">
        {filteredPosts.map((post, index) => (
          <Link to={`/study-group/${post.id}`} key={index}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StudyPosts;
