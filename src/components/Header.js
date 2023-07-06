import React from "react";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
  const loggedin = useSelector((state) => {
    return state.users.loggedin}
  );
  
  return (   
    
    <>
    <Navbar bg="primary" data-bs-theme="primary">
        <Container>
          <Navbar.Brand>DailyWorks</Navbar.Brand>
          <Nav className="me-auto">
            {loggedin && <NavLink to={`/home`} className="navlink">Home</NavLink> }
            <NavLink to={`/register`} className="navlink">Register</NavLink>
            {!loggedin && <NavLink to={`/login`}  className="navlink">Login</NavLink>}
            {loggedin && <NavLink to={`/logout`}  className="navlink">Logout</NavLink>}
          </Nav>
        </Container>
    </Navbar>
    </>
  );
};

export default Header;
