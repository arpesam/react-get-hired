import React from 'react';
import Navbar from './components/navbar/Navbar';
import PageContent from './containers/PageContent';
import Footer from './components/footer/Footer';
import './App.css';



function App() {
  return (
    <div className="App">
      <div className="page-content-wrap">
        <Navbar />
        <PageContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
