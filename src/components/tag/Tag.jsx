import React from 'react';
import './Tag.css';


const Tag = ({ variant, value }) => {

  if (!value) return null;

  const variantColor = {
    green: '#52C41A',
    blue: '#1890FF',
  }[variant];

  const bgColor = {
    green: '#F6FFED',
  }[variant];

  return (
    <div
      className="tag"
      style={{
        border: `1px solid ${variantColor}`,
        color: variantColor,
        backgroundColor: bgColor,
      }}
    >
      {value}
    </div>
  )
}

export default Tag;
