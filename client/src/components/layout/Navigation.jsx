import "../style/Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import { default as logosvg } from "../../assets/nav_logo.svg";
function Navigation(props) {
  return (
    // Using bootstrap Navbar component
    <Navbar expand="lg">
      <div className="navbar-logo-tabs">
        <div id="navbar-logo">
          <div id="logo-header">
            <img src={logosvg} alt="two-smiley-faces-logo" width="60" />
            <div id="navbar-witme">WITME</div>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            id="nav-toggle-button"
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navlinks">
            <NavLink to="/" exact={true}>
              Home
            </NavLink>
            <NavLink to="/recruit-side-project">Project teams</NavLink>
            <NavLink to="/study-group">Study Groups</NavLink>
            {props.currentUser ? (
              <div className="navbar-user">
                <span id="navbar-username">
                  👋&nbsp;&nbsp;{props.currentUser.username}
                </span>
                <button onClick={props.handleLogout}>Log Out</button>
              </div>
            ) : (
              <div className="navbar-user">
                <Link to="/login">
                  <button>Login</button>
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
