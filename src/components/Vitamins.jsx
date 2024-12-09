import React from 'react'
import {Typography, Row, Col, Card, Button, Layout} from 'antd'
// import { ExperimentOutlined, LeafOutlined, GlobalOutlined, CarOutlined, SafetyOutlined, BugOutlined } from '@ant-design/icons';
import {
  MedicineBoxOutlined,
  BarChartOutlined,
  AppstoreOutlined,
} from '@ant-design/icons'

import {AiFillDribbbleSquare} from 'react-icons/ai'
import FeaturesSection from './Feature'
import VitaminGrid from './VitaminGrid'

const {Content} = Layout
const {Title, Text} = Typography
const {Meta} = Card

const Vitamins = () => {
  return (
    <Content>
      {/* Hero Section */}
      <div
        style={{
          background: '#F0F7FF',
          padding: '64px 0',
          position: 'relative',
          overflow: 'hidden',
        }}>
        <Row justify="center" align="middle">
          <Col xs={24} md={12} style={{padding: '0 24px'}}>
            <Title level={1} style={{color: '#002b5c'}}>
              Essential Vitamins
            </Title>
            <Title level={4} style={{color: '#1E2833', fontWeight: 'normal'}}>
              Online Medical Supplies
            </Title>
            <Text
              style={{
                color: '#1E2833',
                display: 'block',
                marginBottom: '24px',
                fontStyle : 'bold',
              }}>
              Get Your Vitamins & Minerals
            </Text>
            <Button
              type="primary"
              size="large"
              style={{background: '#1E2833', borderColor: '#1E2833'}}>
              Explore
            </Button>
          </Col>
        </Row>
        <Row >
        <img
          src="https://www.elbrit.org/wp-content/uploads/2019/03/cropped-logo-original-2.png"
          // alt="Vitamin Bottle"
          style={{
            position: 'absolute',
            right: '10%',
            top: '10%',
            maxWidth: '40%',
            height: 'auto',
          }}
        />

          <Col
            xs={24}
            md={4}
            style={{
              position: 'absolute',
              right: '5%',
              top: '5%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
            <Card size="small" style={{width: 120}}>
              <Text>Vitamins</Text>
            </Card>
            <Card size="small" style={{width: 120}}>
              <Text>Weight Loss</Text>
            </Card>
          </Col>
        </Row>
      </div>

      <FeaturesSection />
      <VitaminGrid />
      {/* Products Section */}

      {/* Blog Section */}
      <div style={{background: '#f0f2f5', padding: '64px 0'}}>
        <Title level={2} style={{textAlign: 'center', marginBottom: '48px'}}>
          Latest News
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {[...Array(6)].map((_, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                cover={
                  <img
                    alt="Blog post"
                    src={
                      index % 2 === 0
                        ? 'https://images.pexels.com/photos/7468572/pexels-photo-7468572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        : 'https://images.pexels.com/photos/7468572/pexels-photo-7468572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    }
                    style={{height: 200, objectFit: 'cover'}}
                  />
                }
                actions={[
                  <Button
                    type="primary"
                    style={{background: '#1E2833', borderColor: '#1E2833'}}>
                    Read more
                  </Button>,
                ]}>
                <Meta
                  title="The Covid-19 Epidemic In 2023 Is Back"
                  description="20 Apr"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Content>
  )
}

export default Vitamins
