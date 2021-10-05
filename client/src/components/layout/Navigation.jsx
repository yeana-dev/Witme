import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const guestUser = <NavLink to="/login">Login</NavLink>;
  return (
    // Using bootstrap Navbar component
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">Witme</Navbar.Brand>
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
            guestUser
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
