import React from 'react'
import RegisterButton from './register-button/RegisterButton';

import './Navbar.css'


const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Get Hired</h1>
      <div>
        <a href="google.com">Pessoas</a>
        <a href="google.com">Vagas</a>
        <RegisterButton />
      </div>
    </div>
  )
}

export default Navbar;
