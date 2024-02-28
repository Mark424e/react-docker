import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <h2><a href='index.js'>Mark's Music Blog</a></h2>
      <ul className='navigation'>
        <li><a rel='noreferrer' href='https://github.com/Mark424e' target='_blank'>Github</a></li>
        <li><a rel='noreferrer' href='https://www.linkedin.com/in/markphillip1800/' target='_blank'>LinkedIn</a></li>
      </ul>
    </header>
  );
}

export default Header;