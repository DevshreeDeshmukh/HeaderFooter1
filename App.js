import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillPersonFill } from "react-icons/bs";
import Footer from './Footer'
import Col from 'react-bootstrap/Col';
import './index.css';
import { ConnectedLoad } from './TableComponents/ConnectedLoad';
import { Modal } from './TableComponents/Modal';
function BasicExample() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <Col xs={6} md={4}>
          <img src='Mahavitaranimg.png' style={{width: '200px'}}/>
        </Col>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#meter" style={{padding:'20px'}} className='rednav'>Meter Details</Nav.Link>
            <Nav.Link href="#connectedLoads" style={{padding:'20px'}} className='rednav'>Connected Loads</Nav.Link>
            <Nav.Link href="#other" style={{padding:'20px'}} className='rednav'>Others</Nav.Link>
            <Nav.Link href="#save" style={{padding:'20px'}} className='rednav'>Save</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='rednav'><BsFillPersonFill/>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <ConnectedLoad/>
    <Modal/>
    <Footer />
    </div>
  );
}

export default BasicExample;
