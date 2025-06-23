import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.column}>
          <h4>About</h4>
          <p>SocialApp is a platform to connect, share, and grow your social circle. Express yourself freely and follow your passion.</p>
        </div>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/profile">My Profile</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/messages">Messages</a></li>
            <li><a href="/notifications">Notifications</a></li>
            <li><a href="/create">Create Post</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Community</h4>
          <ul>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/guidelines">Community Guidelines</a></li>
            <li><a href="/feedback">Send Feedback</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Subscribe</h4>
          <form className={styles.newsletter}>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className={styles.socialIcons}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} SocialApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
