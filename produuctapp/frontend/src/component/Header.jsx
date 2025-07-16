import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/ProductForm" style={styles.link}> Add Product</Link>
        <Link to="/ProductList" style={styles.link}> View Products</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    backdropFilter: 'blur(10px)',
    background: 'rgba(0, 0, 0, 0.6)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '16px 0',
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
    color: '#00fff0',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '18px',
    transition: 'color 0.3s ease',
  },
};

export default Header;
