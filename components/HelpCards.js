'use client'
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaTrain, FaCalendarAlt, FaDollarSign, FaHeadset } from 'react-icons/fa'

const HelpCards = () => {
  const features = [
    {
      icon: <FaTrain size={24} />,
      title: 'Easy & Quick Reservations',
      text: 'We have an easy online booking system for your train travel reservations with discounts.'
    },
    {
      icon: <FaCalendarAlt size={24} />,
      title: 'Paperless E-Tickets',
      text: 'E-tickets make train travel comfortable and carbon-saving compared with paper tickets.'
    },
    {
      icon: <FaDollarSign size={24} />,
      title: 'Safe & Secure',
      text: 'Our website is completely safe & secure with enhanced SSL security and data protection technology.'
    },
    {
      icon: <FaHeadset size={24} />,
      title: '24/7 Customer Assistance',
      text: 'We have an experienced team working round the clock to resolve your train travel queries.'
    }
  ]

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} lg={3} md={6}>
              <Card className="h-100 shadow-sm border-0 rounded-4 p-3">
                <div className="bg-dark text-white d-inline-flex align-items-center justify-content-center rounded-2 mb-3 p-3" style={{ width: '50px', height: '50px' }}>
                  {feature.icon}
                </div>
                <Card.Body className="p-0">
                  <Card.Title className="fw-bold">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">{feature.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default HelpCards
