import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div className="page-container footer-content" >
      <a href="/google.com" >Sobre o projeto</a>
      <div>
        Feito com {' '}
        {/* <i class="fa fa-heart">S2</i> */}
        <span>&hearts;</span>
        {' '} por {' '}
        <a
          href="https://github.com/arpesam"
          target="_blank"
          rel="noopener noreferrer"
        >
          @arpesam
        </a>
      </div>
    </div>
  )
}

export default Footer;
