import "../style/Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import { default as logosvg } from "../../assets/nav_logo.svg";
import { useState } from "react";
function Navigation(props) {
  const [expanded, setExpanded] = useState(false);
  return (
    // Using bootstrap Navbar component
    <Navbar expand="lg" expanded={expanded}>
      <div className="navbar-logo-tabs">
        <div id="navbar-logo">
          <Link to="/">
            <div id="logo-header">
              <img src={logosvg} alt="two-smiley-faces-logo" width="60" />
              <div id="navbar-witme">WITME</div>
            </div>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            id="nav-toggle-button"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navlinks" id="navbar-menu">
            <NavLink to="/" exact={true} onClick={() => setExpanded(false)}>
              HOME
            </NavLink>
            <NavLink
              to="/recruit-side-project"
              onClick={() => setExpanded(false)}
            >
              PROJECT TEAMS
            </NavLink>
            <NavLink to="/study-group" onClick={() => setExpanded(false)}>
              STUDY GROUPS
            </NavLink>
            {props.currentUser ? (
              <div className="navbar-user" onClick={() => setExpanded(false)}>
                <span id="navbar-username">
                  👋&nbsp;&nbsp;
                  <Link to="/user">{props.currentUser.username}</Link>
                </span>
                <button onClick={props.handleLogout}>Log Out</button>
              </div>
            ) : (
              <div className="navbar-user">
                <Link to="/login">
                  <button onClick={() => setExpanded(false)}>Login</button>
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
