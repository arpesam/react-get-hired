import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/navbar/navbar.component';
import MainContent from './containers/MainContent';
import FooterContent from './components/footer/FooterContent';
import './App.css';

const { Header, Footer, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content className="content">
          <MainContent />
        </Content>
        {/* <Footer className="footer">
          <FooterContent />
        </Footer> */}
      </Layout>
    </div>
  );
}

export default App;
