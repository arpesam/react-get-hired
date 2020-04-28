import React from 'react';
import './CustomSelect.css';


const CustomSelect = ({ options }) => {
  return (
    <div className="custom-select" style={{ width: '200px' }}>
      <select>
        <option value="0">Selecione a área:</option>
        <option value="1">Tecnologia</option>
        <option value="2">Produto</option>
        <option value="3">Atendimento</option>
        <option value="4">Vendas</option>
        <option value="5">RH</option>
      </select>
    </div>
  )
}

export default CustomSelect;
