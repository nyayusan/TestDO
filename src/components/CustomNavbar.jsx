import React, { Component } from 'react';
import { Navbar, Nav, NavItem , MenuItem, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>

                    <Navbar.Brand>
                        <Link to="/">Brand Name</Link>
                    </Navbar.Brand>

                    <Navbar.Toggle />

                </Navbar.Header>

                <Navbar.Collapse>

                    <Nav pullRight>

                        <NavItem eventKey={1} componentClass={Link} to="/">
                            Menu Item 1
                        </NavItem>

                        <NavItem eventKey={2} componentClass={Link} to="/about">
                            Menu Item 2
                        </NavItem>

                        <NavItem eventKey={3} componentClass={Link} to="/about">
                            Menu Item 3
                        </NavItem>

                        <NavItem eventKey={4} componentClass={Link} to="/about">
                            Menu Item 4
                        </NavItem>

                        <NavItem eventKey={5} componentClass={Link} to="/about">
                            Menu Item 5
                        </NavItem>

                        <NavItem eventKey={6} componentClass={Link} to="/about">
                            Menu Item 6
                        </NavItem>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}