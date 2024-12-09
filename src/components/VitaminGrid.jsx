"use client"

import { Card, Typography, Button, Row, Col } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const VitaminCard = ({ title, description, imageUrl }) => (
  <Card
    style={{
      background: '#EBF6FF',
      borderRadius: 16,
      border: 'none',
      height: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}
    bodyStyle={{ padding: 24 }}
  >
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Title level={3} style={{ marginBottom: 8, fontSize: 24 }}>
        {title}
      </Title>
      <Text style={{ color: '#666', display: 'block', marginBottom: 24 }}>
        {description}
      </Text>
      <Button
        type="link"
        style={{
          padding: 0,
          fontWeight: 600,
          color: '#1a1a1a'
        }}
      >
        SEE MORE <ArrowRightOutlined />
      </Button>
    </div>
    <div
      style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '50%',
        height: '70%',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
        opacity: 0.9
      }}
    />
  </Card>
)

export default function VitaminGrid() {
  const vitamins = [
    {
      title: 'Vitamin C',
      description: 'Vitamin C as ascorbic acid',
      imageUrl: '/placeholder.svg?height=200&width=200'
    },
    {
      title: 'Vitamin B3',
      description: 'Niacin for healthy gut and skin',
      imageUrl: '/placeholder.svg?height=200&width=200'
    },
    {
      title: 'Magnesium',
      description: 'Boost energy and support muscle function',
      imageUrl: '/placeholder.svg?height=200&width=200'
    },
    {
      title: 'Hyaluronic Acid',
      description: 'For smooth, supple and soft skin!',
      imageUrl: '/placeholder.svg?height=200&width=200'
    },
    {
      title: 'Lactobacillus',
      description: 'Invigorate your gut microbiome',
      imageUrl: '/placeholder.svg?height=200&width=200'
    }
  ]

  return (
    <Row gutter={[24, 24]}>
      {vitamins.map((vitamin, index) => (
        <Col key={index} xs={24} sm={12} lg={8}>
          <VitaminCard {...vitamin} />
        </Col>
      ))}
    </Row>
  )
}