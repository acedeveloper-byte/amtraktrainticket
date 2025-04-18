'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="py-5 bg-light">
        <Container>
          <h1 className="mb-4 fw-bold text-center">About Us</h1>
          <hr />
          <p>
            <strong>We Are One of the Leading Train Travel Planning Services Since 2000</strong>
          </p>
          <p>
            <strong>AmtrakTrainTicket.com</strong> is a trusted platform for train travel planning, based in the United States. We aim to make your train journeys smooth, affordable, and memorable. Whether it's a weekend getaway, a scenic rail tour, a business trip, or a long-distance vacation, we help you plan the perfect trip with ease, flexibility, and reliability.
          </p>
          <p>
            Our team consists of highly experienced travel professionals who work around the clock to offer customized train itineraries and competitive fares that match your preferences, schedule, and budget. We believe in providing our customers with fast, reliable, and user-friendly services that take the stress out of travel planning.
          </p>
          <p>
            We collaborate with top train ticket providers, travel agents, and authorized consolidators to bring you the best available deals. At <strong>amtraktrainticket.com</strong>, you can easily plan, book, and modify your train travel online according to your needs. Our team is always ready to assist you with any travel-related queries, changes, or cancellations.
          </p>
          <p>
            We take pride in offering transparent services, no hidden charges, and real-time support. Our platform is designed to give you all the information you need in one place—from train timings and ticket prices to route details and travel tips.
          </p>
          <p>
            Your satisfaction, safety, and comfort during travel are our top priorities. With years of experience, a strong reputation, and a customer-first approach, we continue to be a dependable choice for train travelers across the country.
          </p>
          <p>
            <strong>Note:</strong> AmtrakTrainTicket.com is an independent travel assistance platform and is not affiliated with or endorsed by the official U.S. Amtrak train services.
          </p>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default AboutUs
