import React from "react"; //Atajo imr
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import './login.css';

//Atajo ccc para crear el contructor componente (el nombre de la clase pegar el export Default)
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  iniciarSesion(){
    alert(`email: ${this.state.email} - password: ${this.state.password}`);
  }

  render() {
    return (
      <Container id="login-container">
        <Row>
          <Col>
            <Row>
              <h2>Iniciar Sesión en PolloXX</h2>
            </Row>
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                xl={{ span: 4, offset: 4 }}
              >
                <Form>
                  <Form.Group>
                    <Form.Label>
                      Correo Electrónico
                    </Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => 
                      this.setState({ email: e.target.value })}
                      placeholder="Correo Electrónico"
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Contraseña
                    </Form.Label>
                    <Form.Control type="password" 
                    onChange={(e) => 
                      this.setState({ password: e.target.value })}
                    placeholder="Contraseña" />
                  </Form.Group>
                  <Button
                    variant="warning"
                    type="submit"
                    onClick = {() => {
                      this.iniciarSesion();
                    }}
                  >
                    Iniciar Sesión
                  </Button>
                </Form>
                <Button
                  variant="outline-dark"
                  type="submit"
                >
                  Registrarse
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
