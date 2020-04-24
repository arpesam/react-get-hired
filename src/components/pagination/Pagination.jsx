import React from 'react'
import './Pagination.css';


const Pagination = () => {
  return (
    <div className="pagination">
      <a href="/google.com">&laquo;</a>
      <a href="/google.com">1</a>
      <a className="active" href="/google.com">2</a>
      <a href="/google.com">3</a>
      <a href="/google.com">4</a>
      <a href="/google.com">5</a>
      <a href="/google.com">6</a>
      <a href="/google.com">&raquo;</a>
    </div>
  )
}

export default Pagination;
