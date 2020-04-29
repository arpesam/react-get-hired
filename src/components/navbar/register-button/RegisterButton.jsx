import React, { useState } from 'react';
import './RegisterButton.css';

const RegisterButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleDropdownClick = () => setShowOptions(!showOptions);
  const handleClick = () => {
    return alert("Sorry! Ainda estou trabalhando nisso")
  }

  return (
  <div className="dropdown">
    <button onClick={handleDropdownClick} className="dropbtn">
      Cadastrar {' '}
      <i className="arrow" />
    </button>

    <div
      id="myDropdown"
      className="dropdown-content"
      style={{ display: showOptions ? 'block' : 'none' }}
    >
      <div onClick={handleClick} >Vagas</div>
      <div onClick={handleClick} >Profissionais</div>
    </div>
  </div>
  )
}

export default RegisterButton;
