'use client'
import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

const Page = () => {
  return (
    <>
      <Header />
      <section className="py-5 bg-light">
        <Container>
          <h1 className="mb-4 fw-bold text-center">Cancellation and Refund Policy</h1>
          <hr />
          <p>
            At <strong>AmtrakTrainTicket.com</strong>, we aim to make your train booking experience smooth and flexible. We understand that plans can change, so we’ve outlined our cancellation and refund policy below to keep things clear and fair for all travelers.
          </p>

          <h5 className="mt-4">1. Cancellation Requests</h5>
          <p>
            You may request to cancel your train ticket by contacting our customer support team at <strong>info@amtraktrainticket.com</strong> or through your booking dashboard, if applicable. Cancellations must be made at least 24 hours prior to the scheduled departure time.
          </p>

          <h5 className="mt-4">2. Refund Eligibility</h5>
          <ul>
            <li>Full or partial refunds are subject to the fare rules set by the railway service provider.</li>
            <li>Refunds are not guaranteed for non-refundable or last-minute bookings.</li>
            <li>Service fees and payment gateway charges are non-refundable.</li>
          </ul>

          <h5 className="mt-4">3. Refund Process</h5>
          <p>
            If your ticket is eligible for a refund, we will process the amount to your original payment method within 7–10 business days. You will receive a confirmation email once the refund is initiated.
          </p>

          <h5 className="mt-4">4. No-Show Policy</h5>
          <p>
            If you do not show up for your scheduled train without prior cancellation, no refund will be issued. Please cancel in advance to retain refund eligibility (if applicable).
          </p>

          <h5 className="mt-4">5. Train Service Cancellations</h5>
          <p>
            In case of train cancellations or rescheduling by the rail operator, we will assist you with rebooking options or process refunds as per the provider's policy. We are not responsible for delays or cancellations by the railway companies.
          </p>

          <h5 className="mt-4">6. Contact and Support</h5>
          <p>
            For any questions or to request a cancellation, please reach out to our team at <strong>info@amtraktrainticket.com</strong>. We're here to help 24/7.
          </p>

          <p className="mt-4">
            <strong>Note:</strong> AmtrakTrainTicket.com is an independent travel booking platform and is not affiliated with the official Amtrak train services.
          </p>

          <p className="mt-4">
            <strong>Effective Date:</strong> April 18, 2025
          </p>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default Page
