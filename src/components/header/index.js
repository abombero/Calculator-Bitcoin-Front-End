import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Bitcoin</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
