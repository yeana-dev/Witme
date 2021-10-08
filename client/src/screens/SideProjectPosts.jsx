import PostCard from "../components/PostCard";
import team_witme from "../assets/team_witme.png";
import "./style/SideProjectPosts.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SideProjectPosts(props) {
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const resp = props.posts.filter(
      (post) => post.category.name === "side_project"
    );
    setFilteredPosts(resp);
  }, [props.posts]);

  const handleRoleChange = (event) => {
    if (event.target.value === "default") {
      setFilteredPosts(
        props.posts.filter((post) => post.category.name === "side_project")
      );
    } else {
      setFilteredPosts(
        props.posts.filter(
          (post) =>
            post.looking_for === event.target.value ||
            post.looking_for === "All"
        )
      );
    }
  };

  return (
    <div className="side-project-posts-container">
      <div className="posts-top">
        <img src={team_witme} alt="team-collaborating-pic" width="400" />
        <div className="posts-top-right">
          <header>Team-Witme!</header>
          <p>Whether you want to join a team or make the team, Start here!</p>
          <div className="role-selection">
            I am a
            <select onChange={handleRoleChange}>
              <option value="default">Select a role</option>
              <option value="Front-end">Front-end Developer</option>
              <option value="Back-end">Back-end Developer</option>
              <option value="Designer">Designer</option>
            </select>
          </div>
        </div>
      </div>
      <div className="new-post">
        <Link to="/new-post-recruit">
          <i className="fas fa-file"></i> New Post
        </Link>
      </div>
      <div className="post-card-container">
        {filteredPosts.map((post, index) => (
          <Link to={`/recruit-side-project/${post.id}`} key={index}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideProjectPosts;
