import React, { useEffect, useState } from 'react'
import { collections } from '../../firebase';
import Filters from '../../components/filters/Filters';
import Pagination from '../../components/pagination/Pagination';
import CardsWapper from '../../components/card-wrapper/CardsWrapper';
import ContentHeader from '../../components/content-header/ContentHeader';
import './PageContent.css';


const PageContent = ({ currentPage }) => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      const content = await collections[currentPage]
        .orderBy("place")
        .startAfter(offset)
        .limit(12)
        .get();
      setData(content.docs.map(doc => doc.data()));
    }
    fetchData()
  }, [])

  const onChangePage = (interval) => {
    console.log('page change')
    // ...working on this
  }


  return (
    <div className="page-container page-content" >
      <div>
        <ContentHeader currentPage={currentPage} />
        <Filters />
      </div>
      <CardsWapper currentPage={currentPage} data={data} />
      <Pagination onChangePage={onChangePage} />
    </div>
  )
}

export default PageContent;
