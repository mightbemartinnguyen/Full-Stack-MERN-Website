import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="globalNav"> 
      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/order">Order</Link>
      <Link to="/staff">Staff List</Link> {/* Add Staff Link */}
      <Link to="/log">Restaurants</Link> 
    </nav>
  );
}

export default Navigation;
