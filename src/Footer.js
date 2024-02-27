import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <p>Follow me on:</p>
      <div className='flex'>
        <div className='margin'>
        <a href="https://github.com/Mark424e">GitHub</a>
        </div>
        <div className='margin'>
          <a href="https://www.linkedin.com/in/markphillip1800/">LinkedIn</a>
        </div>
      </div>
      <hr></hr>
      <p>© 2024 Mark P. Thomassen | All Rights Reserved</p>
    </footer>
  )
}

export default Footer;