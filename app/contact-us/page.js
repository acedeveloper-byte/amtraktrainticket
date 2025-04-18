'use client'
import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const Page = () => {
  return (
    <>
      <Header />
      <section className="py-5 bg-light">
        <Container>
          <h1 className="text-center mb-4 fw-bold">Contact Us</h1>
          <hr />
          <Row className="mb-5">
            <Col md={4}>
              <h5 className="fw-semibold">Address</h5>
              <p>123 Main Street, Suite 100<br />New York, NY 10001, USA</p>

              <h5 className="fw-semibold mt-4">Phone</h5>
              <p>+1 (555) 123-4567</p>

              <h5 className="fw-semibold mt-4">Email</h5>
              <p>info@amtraktrainticket.com</p>
            </Col>

            <Col md={8}>
              <h5 className="fw-semibold mb-3">Send Us a Message</h5>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Type your message..." />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default Page
