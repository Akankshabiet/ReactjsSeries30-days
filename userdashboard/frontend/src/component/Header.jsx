import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/Userform" style={styles.link}>User Form</Link>
        <Link to="/List" style={styles.link}>List</Link>
        <Link to="/update" style={styles.link}>Update User</Link>
        <Link to="/add" style={styles.link}>Add</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    backgroundColor: '#333',
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'center', 
    position: 'fixed', 
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  nav: {
    display: 'flex',
    gap: '40px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
  }
};

export default Header;
