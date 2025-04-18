'use client'
import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Disclaimer = () => {
  return (
    <section className="bg-light py-5">
      <Container>
        <h2 className="mb-4 fw-bold text-center">Disclaimer</h2>
        <p className="mb-3">
          Welcome to <strong>AmtrakTrainTicket.com</strong>, your go-to platform for booking train travel across the United States. We provide reliable, affordable, and hassle-free train ticket booking services. Please note the following important terms and conditions regarding our services.
        </p>
        <p className="mb-3">
          While we strive to provide accurate and up-to-date information, all details regarding train schedules, ticket availability, and pricing are subject to change without notice. We do not guarantee the accuracy, completeness, or timeliness of the information on this website.
        </p>
        <p className="mb-3">
          **AmtrakTrainTicket.com** is an independent booking platform and is not affiliated with official Amtrak services. All trademarked names and logos are the property of their respective owners.
        </p>
        <p className="mb-0">
          By using our website, you acknowledge that we are not responsible for any delays, cancellations, or service interruptions caused by train operators. We recommend reviewing the terms and conditions of the service providers before booking your travel. 
        </p>
      </Container>
    </section>
  )
}

export default Disclaimer
