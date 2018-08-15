import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

export default () => <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <img src={logo} className="App-logo" alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1}>
        <Link to="/">Home</Link>
      </NavItem>
      <NavDropdown eventKey={3} title="Programming">
        <MenuItem eventKey={3.1}>C++</MenuItem>
        <MenuItem eventKey={3.2}>JavaScript</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>C</MenuItem>
        <MenuItem eventKey={3.4}>Java</MenuItem>
        <MenuItem eventKey={3.5}>Python</MenuItem>
      </NavDropdown>
      <NavItem eventKey={4} href="#">
        Computer Science
      </NavItem>
      <NavItem eventKey={5} href="#">
        Soft Skills
      </NavItem>
      <NavItem eventKey={2} href="#">
        Travel
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
