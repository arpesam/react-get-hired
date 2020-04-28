import React from 'react';
import { pageDescription } from '../../constants/page-header-text';
import './ContentHeader.css';


const ContentHeader = ({ currentPage }) => {

  if (!currentPage) return null;

  const content = pageDescription[currentPage];

  return (
    <div className="content-header">
      <h1>{content.title}</h1>
      <p>{content.paragraph1}</p>
      <p>{content.paragraph2}</p>
    </div>
  )
}

export default ContentHeader;
