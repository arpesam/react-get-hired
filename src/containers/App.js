import React from 'react';
import Navbar from '../components/navbar/Navbar';
import PageContent from './page-content/PageContent';
import Footer from '../components/footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;
