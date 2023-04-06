import React from "react";
import { Container, Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <navbar bg="dark" expand="lg" variant="dark" fixed="top">
      <Container>
        <NavLink to="/home" style={{textDecoration:'none',color:'white'}}>HOME</NavLink>
        <NavLink to="/store" style={{textDecoration:'none',color:'white'}}>STORE</NavLink>
        <NavLink to="/about" style={{textDecoration:'none',color:'white'}}>ABOUT</NavLink>
        <NavLink to="/contact" style={{textDecoration:'none',color:'white'}}>Contact us</NavLink>
        <Cartbutton onButtonpass={props.onOpenButton}></Cartbutton>
        </Container>
      </navbar>
    </div>
  );
};

export default Navbar;
