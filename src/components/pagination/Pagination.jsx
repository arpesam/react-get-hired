import React, { useState } from 'react'
import './Pagination.css';


const Pagination = ({ onChangePage }) => {
  const [pageConfig, setPageConfig] = useState({
    start: 1,
    end: 6,
    currentPage: 1,
    limit: 5,
  })

  const handlePagination = (value) => {
    if (pageConfig.currentPage <= 1 && value === -1) return;
    const currentOffset = pageConfig.end;

    setPageConfig({
      ...pageConfig,
      currentPage: pageConfig.currentPage + value,
      start: currentOffset,
      end: currentOffset + pageConfig.limit,
    });
    onChangePage(pageConfig.end);
  }

  return (
    <div className="pagination">
      <div onClick={() => handlePagination(1)} >
        MOSTRAR MAIS
      </div>
    </div>
  )
}

export default Pagination;
