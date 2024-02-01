import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const MyNavbar = () => {
    return (
        <Navbar className=" px-5 " bg="dark" variant="dark" expand="lg">
        <Navbar.Brand ><span ><Nav.Link><Link className="text-danger fw-bold text-decoration-none" to='/'>Max</Link></Nav.Link></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link className="text-white fw-bold text-decoration-none" to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link className="text-white fw-bold text-decoration-none" to='/#'>About</Link></Nav.Link>
            <Nav.Link><Link className="text-white fw-bold text-decoration-none" to='/#'>Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default MyNavbar;