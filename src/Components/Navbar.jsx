import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Social-Media</h1>
      <ul className={styles['nav-links']}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/create">Create Post</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;