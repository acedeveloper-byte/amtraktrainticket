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
          Welcome to our travel booking platform! We specialize in providing seamless travel experiences with
          top-notch customer support and competitive pricing. Whether you're planning a romantic getaway to Paris,
          a business trip to Tokyo, or a family vacation in New York, we’ve got you covered.
        </p>
        <p className="mb-3">
          Our platform offers flexible search tools, real-time availability, and personalized travel deals. We're committed
          to making your journey easy, affordable, and enjoyable—from search to final booking.
        </p>
        <p className="mb-0">
          With partnerships across airlines, railways, and tour operators, we ensure that you always get the best
          options, all in one place. Travel smart, travel with us.
        </p>
      </Container>
    </section>
  )
}

export default Disclaimer

