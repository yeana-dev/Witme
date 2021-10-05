import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    // Using bootstrap Navbar component
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">Witme</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recruit-side-project"></NavLink>
          <NavLink to="/study-group">Study Groups</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
