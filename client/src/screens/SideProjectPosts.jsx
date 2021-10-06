import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

function SideProjectPosts(props) {
  const filteredPosts = props.posts.filter(
    (post) => post.category.name === "side_project"
  );
  return (
    <div className="side-project-posts-container">
      <Link to="/new-post-recruit">New Post</Link>
      {filteredPosts.map((post, index) => (
        <div className="post-card" key={index}>
          <Link to={`/recruit-side-project/${post.id}`}>
            <PostCard post={post} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SideProjectPosts;
