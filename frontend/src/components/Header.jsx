import { Container, Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="white" expand="lg" className="shadow-sm">
    <Container>
      <Navbar.Brand>Hexlet Chat</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
