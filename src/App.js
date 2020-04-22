import React from 'react';
import { Layout, Button } from 'antd';
import Navbar from './components/navbar/navbar.component';
import MainContent from './containers/MainContent';
import './App.css';

const { Header, Footer, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <MainContent />
        </Content>
        {/* <Footer>Footer</Footer> */}
    </Layout>
    </div>
  );
}

export default App;
