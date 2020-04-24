import React from 'react';
import './ContentHeader.css';


const ContentHeader = ({ title, paragraph1, paragraph2 }) => {
  return (
    <div className="content-header">
      <h1>{title}</h1>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  )
}

export default ContentHeader;
