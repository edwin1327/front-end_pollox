import React from "react";
import {
  Container,
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar bg="white" expand="lg" id="Navbar">
        <Container fluid>
          <Navbar.Brand href="#">PolloXX</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Inicio</Nav.Link>
              <Nav.Link href="#action2">Menú</Nav.Link>
              <Nav.Link href="#action3">Contactenos</Nav.Link>
            </Nav>
            <DropdownButton id="dropdown-basic-button" variant="warning" title="Usuario">
              <Dropdown.Header id="Dropdown-Header">
                <FontAwesomeIcon icon={faUser} />
              </Dropdown.Header>
              <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
