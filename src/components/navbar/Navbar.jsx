import React from 'react'
import RegisterButton from './register-button/register-button.component';

import './Navbar.css'


const Navbar = () => {
  return (
    <div className="container navbar" >
      <div className="logo">Get Hired</div>
      <div>
        <a href="google.com">Pessoas</a>
        <a href="google.com">Vagas</a>
        <RegisterButton />
      </div>
    </div>
  )
}

export default Navbar;
