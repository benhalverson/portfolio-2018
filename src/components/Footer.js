import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './footer.css';
const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li><a href="https://github.com/benhalverson"><FaGithub size="2em"/></a></li>
        <li><a href="https://twitter.com/ben_halverson"><FaTwitter size="2em"/></a></li>
        <li><a href="https://linkedin.com/benhalverson"><FaLinkedin size="2em"/></a></li>
      </ul>
    </nav>
  </footer>
)

export default Footer;