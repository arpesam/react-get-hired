import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import PageContent from './page-content/PageContent';
import Footer from '../components/footer/Footer';
import { pages } from '../constants/pages';
// import Teste from './teste';

import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState(pages.jobs);

  const onChangePage = (goToPage) => setCurrentPage(pages[goToPage]);

  return (
    <div className="App">
      <Navbar onChangePage={(goToPage) => onChangePage(goToPage)} />
      <PageContent currentPage={currentPage} />
      {/* <Teste /> */}
      <Footer />
    </div>
  );
}

export default App;
