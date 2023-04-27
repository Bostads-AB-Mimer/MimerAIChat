import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import UserOptions from './UserOptions';
import styles from './NavbarComponent.module.css';

const NavbarComponent = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Navbar bg="light" expand="md" className={`sticky-top ${styles.navbar}`}>
      <Container className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/mimerlogo1.png`}
              alt="Mimer Logo"
              className={styles.logo}
            />
          </Link>
        </div>
        <div className={`${styles.userOptionsContainer} d-none d-md-flex`}>
          <UserOptions />
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setOpenNav(!openNav)}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={openNav ? 'show' : ''}
        >
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/om">
              Om
            </Nav.Link>
            <Nav.Link as={Link} to="/chatt">
              Chatt
            </Nav.Link>
            <Nav.Link as={Link} to="/riktlinjer">
              Mimers AI-riktlinjer
            </Nav.Link>
            <div className={`${styles.mobileUserOptions} d-md-none`}>
              <UserOptions />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
