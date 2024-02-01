import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const MyNavbar = () => {
    return (
        <Navbar className=" px-5 " bg="dark" variant="dark" expand="lg">
        <Navbar.Brand ><Link className="text-danger fw-bold text-decoration-none" to='/'>Max</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="text-white fw-bold text-decoration-none px-3" to='/'>Home</Link>
            <Link className="text-white fw-bold text-decoration-none px-3" to='/#'>About</Link>
            <Link className="text-white fw-bold text-decoration-none px-3" to='/#'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default MyNavbar;