import React from 'react';
import { HeartFilled } from '@ant-design/icons';
import './Footer.css';


const Footer = () => {
  return (
    <div className="page-container footer-content" >
      <a
        href="https://github.com/arpesam/react-get-hired"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sobre o projeto
      </a>
      <div>
        Feito com {' '}
        <HeartFilled style={{ fontSize: '16px', color: 'red' }} />
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
