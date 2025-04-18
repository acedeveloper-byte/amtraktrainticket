'use client'
import React from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const AboutDetails = () => {
  return (
    <section className="bg-light py-5">
      <Container>
        <h2 className="mb-4 fw-bold text-center">About Us</h2>
        <p className="mb-3">
          Welcome to <strong>AmtrakTrainTicket.com</strong>, your trusted online platform for booking affordable and reliable train travel in the United States. Since 2000, we have been committed to delivering seamless travel experiences with the best fares, easy-to-use tools, and exceptional customer service.
        </p>
        <p className="mb-3">
          Whether you're planning a cross-country adventure, a weekend getaway, or a family vacation, AmtrakTrainTicket.com provides you with real-time train availability, flexible booking options, and personalized deals tailored to your needs. We work with top train operators to bring you the best routes, schedules, and prices.
        </p>
        <p className="mb-0">
          At AmtrakTrainTicket.com, we aim to make your travel as smooth and stress-free as possible. With our reliable services, expert support team, and customer-first philosophy, we are your go-to solution for all train travel bookings across the U.S. Start your journey with us today and travel smart!
        </p>
      </Container>
    </section>
  )
}

export default AboutDetails
