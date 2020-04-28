import React from 'react'
import RegisterButton from './register-button/RegisterButton';

import './Navbar.css'


const Navbar = ({ onChangePage }) => {
  return (
    <div className="page-container custom-navbar">
      <h1>Get Hired</h1>
      <div>
        <div className="menu-item" onClick={() => onChangePage('profiles')} >Pessoas</div>
        <div className="menu-item" onClick={() => onChangePage('jobs')} >Vagas</div>
        <RegisterButton />
      </div>
    </div>
  )
}

export default Navbar;
