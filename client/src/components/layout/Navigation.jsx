import "../style/Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { default as logosvg } from "./nav_logo.svg";
function Navigation(props) {
  return (
    // Using bootstrap Navbar component
    <Navbar expand="md" id="navbar">
      <div id="navbar-logo">
        <img src={logosvg} width="60" />
        <div id="navbar-witme">WITME</div>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recruit-side-project">Project teams</NavLink>
          <NavLink to="/study-group">Study Groups</NavLink>
          {props.currentUser ? (
            <div>
              Hello {props.currentUser.username}!
              <button onClick={props.handleLogout}>Log Out</button>
            </div>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
