import React from 'react';
import { Layout as AntLayout, Menu, Typography, Row, Col, Space } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = AntLayout;
const { Title, Text } = Typography;

const Layout = ({ children }) => {
  return (
    <AntLayout>
      <Header style={{ background: '#fff', padding: '0 50px' }}>
        <div style={{ float: 'left' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkD0BQS9jGeinYMt4hIb2_gTlD--VXVFqXA&s" alt="ELBRITTTTT" style={{ height: 40 }} />
        </div>
        <Menu mode="horizontal" style={{ float: 'right' }}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Products</Menu.Item>
          <Menu.Item key="3">About</Menu.Item>
          <Menu.Item key="4">Contact</Menu.Item>
        </Menu>
      </Header>

      <Content>{children}</Content>

      <Footer style={{ background: '#1E2833', padding: '64px 50px' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <img src="https://drive.google.com/file/d/1LZ5ZlgCH-ooC0MvOasXSOU2NgGAZ273F/view?usp=sharing" alt="ELBRITT_SERVICES" style={{ height: 40, marginBottom: 16 }} />
            <Text style={{ color: 'rgba(255, 255, 255, 0.65)', display: 'block' }}>
              Your health, physical and emotional well-being is important to us. 
              We are always by your side and have made it even easier for you to 
              find the necessary vitamins.
            </Text>
          </Col>
          <Col xs={24} md={12}>
            <Title level={4} style={{ color: 'white' }}>Contact</Title>
            <Space direction="vertical">
              <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                <PhoneOutlined style={{ marginRight: 8 }} />
                +974 3118 1843
              </Text>
              <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                <MailOutlined style={{ marginRight: 8 }} />
                Elbrithcqhr@gmail.com
              </Text>
              <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                <EnvironmentOutlined style={{ marginRight: 8 }} />
                Ambassador Street, Zone 61
              </Text>
            </Space>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: 48, borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: 24 }}>
          <Col>
            <Text style={{ color: 'rgba(255, 255, 255, 0.45)' }}>
              Copyright 2024, ELBRIT
            </Text>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Text style={{ color: 'rgba(255, 255, 255, 0.45)' }}>
              Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
            </Text>
          </Col>
        </Row>
      </Footer>
    </AntLayout>
  );
};

export default Layout;

