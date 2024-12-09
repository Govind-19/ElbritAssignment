import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import Vitamins from './components/Vitamins';
import FooterComponent from './components/ContactForm';


const { Header, Footer } = Layout;

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1E2833',
          fontFamily: 'Inter, sans-serif',
        },
      }}
    >
      <Layout>
        <Header style={{ background: '#fff', padding: '0 50px' }}>
          <img src="https://www.elbrit.org/wp-content/uploads/2019/03/cropped-logo-original-2.png" alt="ELBRIT" style={{ height: 40, float: 'left' }} />
        </Header>
        <Vitamins />

        <FooterComponent/>
        <Footer style={{ textAlign: 'center' }}>
          Elbrit Life Sciences ©2024 Created by Elbrit
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;

