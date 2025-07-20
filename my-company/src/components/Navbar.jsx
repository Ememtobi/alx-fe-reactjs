import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem 2rem', background: '#1976d2', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
    <Link to="/" style={{ color: '#fff', textDecoration: 'none', margin: '0 1rem', fontWeight: 'bold', fontSize: '1.1rem', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background 0.2s' }}>Home</Link>
    <Link to="/about" style={{ color: '#fff', textDecoration: 'none', margin: '0 1rem', fontWeight: 'bold', fontSize: '1.1rem', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background 0.2s' }}>About</Link>
    <Link to="/services" style={{ color: '#fff', textDecoration: 'none', margin: '0 1rem', fontWeight: 'bold', fontSize: '1.1rem', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background 0.2s' }}>Services</Link>
    <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', margin: '0 1rem', fontWeight: 'bold', fontSize: '1.1rem', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background 0.2s' }}>Contact</Link>
  </nav>
);

export default Navbar;
