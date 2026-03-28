import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {
    return (
        <Navbar expand="lg" className="fixed-top" >
            < Container >

                <Navbar.Brand href="#Home">AutoCare Hub</Navbar.Brand>

                < Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    {/* 🔥 me-auto → ms-auto */}
                    <Nav className="ms-auto">

                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>

                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/airfelter">
                                Air Filter Cleaning
                            </NavDropdown.Item>

                            <NavDropdown.Item as={NavLink} to="/enginegeneralservicing">
                                Engine General Servicing
                            </NavDropdown.Item>

                            {/* <NavDropdown.Item href="#action/3.3">Engine General servecing </NavDropdown.Item> */}

                            <NavDropdown.Item as={NavLink} to="/oilpart">
                                Oil Felter
                            </NavDropdown.Item>

                            {/* <NavDropdown.Item href="#action/3.4">Wheele Gresing</NavDropdown.Item> */}
                            <NavDropdown.Item as={NavLink} to="/wheelg">
                                Wheel Gresing
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                        </NavDropdown>

                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>

                        <Nav.Link as={NavLink} to="/garagebilling">Garage Billing</Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Container >
        </Navbar >
    );
}

export default Header;