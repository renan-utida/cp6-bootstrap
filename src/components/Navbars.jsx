import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Epic Heroes Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Produtos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Camisetas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Chaveiros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Miniaturas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Revistas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Todos os Produtos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars