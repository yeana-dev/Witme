import PostCard from "../components/PostCard";
import team_witme from "../assets/team_witme.png";
import "./style/SideProjectPosts.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SideProjectPosts(props) {
  const [filteredPosts, setFilteredPosts] = useState([]);
  useEffect(() => {
    // When the page is loaded, We need to render posts that has a category of side_project
    const resp = props.posts.filter(
      (post) => post.category.name === "side_project"
    );
    setFilteredPosts(resp);
  }, [props.posts]);

  const handleRoleChange = (event) => {
    if (event.target.value === "default") {
      // If the role is not selected, display all posts
      setFilteredPosts(
        props.posts.filter((post) => post.category.name === "side_project")
      );
    } else {
      setFilteredPosts(
        // If the role is selected, filter the posts that has a selected role as looking_for
        props.posts.filter(
          (post) =>
            post.looking_for === event.target.value ||
            // If the post is looking for ALL roles, display them on every selected role.
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
              {/* Let user select their role to see the posts that is looking for user's selected role */}
              <option value="default">Select a role</option>
              <option value="Front-end">Front-end Developer</option>
              <option value="Back-end">Back-end Developer</option>
              <option value="Designer">Designer</option>
            </select>
          </div>
        </div>
      </div>
      <div className="new-post">
        {props.currentUser && (
          // Only logged-in user can post
          <Link to="/new-post-recruit">
            <i className="fas fa-file"></i>&nbsp;&nbsp;NEW POST
          </Link>
        )}
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
