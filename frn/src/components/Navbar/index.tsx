import React from 'react';
import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import 'styles.css';

const Navbar: React.FC = () => {
  return (
    <header>
    <nav className="container">
      <div className="dsmovie-nav-content">
        <h1>DsMovie</h1>
        <a href="https://github.com/lyhteixeirah">
          <div className="dsmovie-contact-container">
            <GithubIcon />
            <p className="dsmovie-contact-container">/lyhteixeirah</p>
          </div>
        </a>
      </div>
    </nav>
  </header>
  );
}

export default Navbar;