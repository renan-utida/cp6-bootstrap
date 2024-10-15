import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  return (
    <header>
      <Navbar expand="lg" className="position-fixed z-3 bg-white border-bottom border-primary border-5 w-100 h-auto">
        <Container className='py-2'>
          <Navbar.Brand href="#home" className='text-danger fst-italic fw-bold fs-3'>Epic Heroes Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='ms-4 fw-bold'>Home</Nav.Link>
              <NavDropdown title="Produtos" id="basic-nav-dropdown" className='ms-4 fw-bold'>
                <NavDropdown.Item href="#camisetas">Camisetas</NavDropdown.Item>
                <NavDropdown.Item href="#chaveiros">Chaveiros</NavDropdown.Item>
                <NavDropdown.Item href="#miniaturas">Miniaturas</NavDropdown.Item>
                <NavDropdown.Item href="#revistas">Revistas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#camisetas">
                  Todos os Produtos
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#tabelas" className='ms-4 fw-bold'>Tabelas</Nav.Link>
              <Nav.Link href="#modal" className='ms-4 fw-bold'>Modal</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navbars