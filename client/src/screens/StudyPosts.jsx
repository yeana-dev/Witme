import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

function StudyPosts(props) {
  const filteredPosts = props.posts.filter(
    (post) => post.category.name === "study_group"
  );
  return (
    <div className="study-posts-container">
      <Link to="/new-post-study">New Post</Link>
      {filteredPosts.map((post, index) => (
        <div className="post-card" key={index}>
          <Link to={`/study-group/${post.id}`}>
            <PostCard post={post} key={index} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default StudyPosts;
