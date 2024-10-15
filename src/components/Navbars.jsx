import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  return (
    <Navbar expand="lg" className="position-fixed z-3 bg-white border-bottom border-primary border-5 w-100 h-auto">
      <Container className='py-2'>
        <Navbar.Brand href="#home" className='text-danger fw-bold fs-3'>Epic Heroes Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='ms-4'>Home</Nav.Link>
            <NavDropdown title="Produtos" id="basic-nav-dropdown" className='ms-4'>
              <NavDropdown.Item href="#action/3.1">Camisetas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Chaveiros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Miniaturas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Revistas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">
                Todos os Produtos
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className='ms-4'>Tabelas</Nav.Link>
            <Nav.Link href="#link" className='ms-4'>Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars