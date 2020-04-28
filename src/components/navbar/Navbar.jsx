import React from 'react'
import RegisterButton from './register-button/RegisterButton';
import logo from '../../assets/img/logo.png';
import './Navbar.css'


const Navbar = ({ onChangePage }) => {
  return (
    <div className="page-container custom-navbar">
      <div>
        <img src={logo} alt="Get Hired Logo" width="230px" />
      </div>
      <div>
        <div className="menu-item" onClick={() => onChangePage('profiles')} >Pessoas</div>
        <div className="menu-item" onClick={() => onChangePage('jobs')} >Vagas</div>
        <RegisterButton />
      </div>
    </div>
  )
}

export default Navbar;
