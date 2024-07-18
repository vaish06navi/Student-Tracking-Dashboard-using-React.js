// Sidebar.js
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Navbar bg="light" expand="md" className="sidebar">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/profile">Student Profile</Nav.Link>
            <Nav.Link as={Link} to="/education">Education Streams</Nav.Link>
            <Nav.Link as={Link} to="/blogs">Education Blogs</Nav.Link>
            <Nav.Link as={Link} to="/attendance">Attendance</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
