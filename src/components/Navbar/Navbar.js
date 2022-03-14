import React, {useState} from 'react';
import {Navbar, Container, Button,NavDropdown,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'


function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 

  const [size, setsize] = useState(false)
  const changeSize = () => {
      if(window.scrollY >= 90) {
          setsize(true)
      } else {
          setsize(false)
      }
  }
  window.addEventListener("scroll", changeSize)
 return <div>
<Navbar collapseOnSelect expand="xl"  className='shadow-sm p-3 mt-5 bg-white rounded' fixed='top' >
  <Container fluid>
  <Navbar.Brand className={size ? "navbar-logo img navbar-logo-size img" : "navbar-logo img "} ><Link to='/'><img src="images/logo1.png"  alt='offer-logo'/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  onClick={handleClick}> 
  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className='ms-auto mb-2 mb-lg-0'>
    <NavDropdown title="GENERAL" id="collasible-nav-dropdown" >
        <NavDropdown.Item ><Link to='/Services'>Cleanings & Exams</Link></NavDropdown.Item>
        <NavDropdown.Item > <Link to='/WhiteFilling'>White Fillings</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/Features'>Emergency Care</Link></NavDropdown.Item>
        <NavDropdown.Item > <Link to='/Root-Canals'>Root Canals</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/Features'>Porcelain Crowns</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/Features'>Holistic Dentistry</Link></NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="COSMETIC" id="collasible-nav-dropdown"  >
        <NavDropdown.Item as={Link} to='/'>Cosmetic item 1</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>Cosmetic item 2</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>Cosmetic item 3</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>Sosmetic item 4</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="SURGICAL" id="collasible-nav-dropdown" >
        <NavDropdown.Item as={Link} to='/'>Surgical 1</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>Surgical 2</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>Surgical 3</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>Surgical 4</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="KIDS DENTISTRY" id="collasible-nav-dropdown" >
        <NavDropdown.Item as={Link} to='/'>Tooth Colored Filling</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>Cleaning & Prevention</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>Extraction</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>Sealants</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>Emergencies</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link href="#review" onClick={closeMobileMenu}>REVIEWS</Nav.Link>
    <NavDropdown title="ABOUT" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link to='/OurVideos'>Our Video</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/Photo-gallerys'>Photo Gallery</Link></NavDropdown.Item>
        <NavDropdown.Item href='#doctor'>About Doctor</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>About Clinic</NavDropdown.Item>
    </NavDropdown>

    <Button className='bookonline-btn'><Link to='/Book_Online'> BOOK ONLINE</Link> </Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </div>;
}

export default NavBar;
