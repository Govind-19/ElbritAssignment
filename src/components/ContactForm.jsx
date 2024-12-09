"use client"

import { Layout, Row, Col, Typography, Space } from 'antd'
import { AiFillDribbbleSquare } from "react-icons/ai";


const { Footer } = Layout
const { Text, Paragraph } = Typography



const ContactItem = ({ icon, title, content }) => (
  <div
    style={{
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    }}
  >
    <div style={{ fontSize: '24px', color: '#89CFF0' }}>{icon}</div>
    <div>
      <Text style={{ color: 'white', display: 'block' }}>{title}</Text>
      <Text style={{ color: 'white', opacity: 0.8 }}>{content}</Text>
    </div>
  </div>
)

export default function FooterComponent() {
  return (
    <Footer
      style={{
        background: '#1B4D59',
        padding: '48px 24px',
        color: 'white',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={8}>
            <ContactItem
              icon={<AiFillDribbbleSquare />}
              title="Phone Number"
              content="+974 3118 1843"
            />
          </Col>
          <Col xs={24} sm={8}>
            <ContactItem
              icon={<AiFillDribbbleSquare />}
              title="Email Address"
              content="Elbrithcqhr@gmail.com"
            />
          </Col>
          <Col xs={24} sm={8}>
            <ContactItem
              icon={<AiFillDribbbleSquare />}
              title="Office Location"
              content="Ambassador Street, Zone 61,"
            />
          </Col>
        </Row>

        <Row gutter={[48, 48]} style={{ marginTop: '48px' }}>
          <Col xs={24} md={12}>
            <div style={{ marginBottom: '24px' }}>
              <img
                src="/placeholder.svg"
                alt="Elbrit Life Sciences Logo"
                width={300}
                height={80}
                style={{ background: 'white', padding: '12px', borderRadius: '8px' }}
              />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <Paragraph style={{ color: 'white', opacity: 0.9, fontSize: '16px' }}>
              Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
            </Paragraph>
          </Col>
        </Row>

        <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AiFillDribbbleSquare style={{ color: 'white', opacity: 0.7 }} />
          <Text style={{ color: 'white', opacity: 0.7 }}>
            Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
          </Text>
        </div>
      </div>
    </Footer>
  )
}

