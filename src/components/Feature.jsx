import React from 'react';
import { Row, Col, Card } from 'antd';
// import { ExperimentOutlined, LeafOutlined, GlobalOutlined, ShoppingCartOutlined, SyncOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

import { AiFillDribbbleSquare } from "react-icons/ai";
const { Meta } = Card;

const features = [
  {
    icon: <AiFillDribbbleSquare style={{ fontSize: '32px' }} />,
    title: "Clinically Studied",
    description: "All products that we offer have undergone lab and safety tests"
  },
  {
    icon: <AiFillDribbbleSquare style={{ fontSize: '32px' }} />,
    title: "Vegetarian Friendly",
    description: "We have a wide selection of vegetarian products to meet your needs"
  },
  {
    icon: <AiFillDribbbleSquare style={{ fontSize: '32px' }} />,
    title: "Made In India",
    description: "Shop local and explore health products made right here in India"
  },
  {
    icon: <AiFillDribbbleSquare style={{ fontSize: '32px' }} />,
    title: "Free Shipping",
    description: "We deliver to your door with no shipping costs on your orders"
  },
  {
    icon: <AiFillDribbbleSquare style={{ fontSize: '32px' }} />,
    title: "No Risk",
    description: "We ensure that all products are safe and within their use-by date"
  },
  {
    icon: <AiFillDribbbleSquare style={{ fontSize: '32px' }} />,
    title: "GMO Free",
    description: "Natural, no modified products and derivatives for those who need it"
  }
];

const FeaturesSection = () => {
  return (
    <div style={{ padding: '24px', backgroundColor: '#1B4754' }}>
      <Row gutter={[16, 16]}>
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              style={{ backgroundColor: 'transparent', border: 'none' }}
              bodyStyle={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '50%', 
                width: '80px', 
                height: '80px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                {React.cloneElement(feature.icon, { style: { ...feature.icon.props.style, color: '#1B4754' } })}
              </div>
              <Meta
                title={<span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>{feature.title}</span>}
                description={<span style={{ color: '#e0e0e0' }}>{feature.description}</span>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturesSection;

