import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/css/footer.css';
const Footer = () => (
  <div className="footer">
    <footer>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/benhalverson">
              <FaGithub size="2em" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ben_halverson">
              <FaTwitter size="2em" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/benhalverson">
              <FaLinkedin size="2em" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
);

export default Footer;
