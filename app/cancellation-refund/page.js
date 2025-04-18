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
          <h1 className="mb-4 fw-bold text-center">Cancellation and Refund</h1>
          <hr />
          <p>
            At <strong>AmtrakTrainTicket.com</strong>, we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our website and services.
          </p>

          <h5 className="mt-4">1. Information We Collect</h5>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Personal Information (name, email, phone number, billing details)</li>
            <li>Travel information (destinations, preferences, travel dates)</li>
            <li>Payment and transaction details</li>
            <li>Device and browser information for analytics</li>
          </ul>

          <h5 className="mt-4">2. How We Use Your Information</h5>
          <p>We use your information to:</p>
          <ul>
            <li>Process train ticket bookings</li>
            <li>Send confirmations and updates</li>
            <li>Respond to your inquiries</li>
            <li>Improve our website and customer service</li>
            <li>Send promotional emails (only if opted-in)</li>
          </ul>

          <h5 className="mt-4">3. Data Security</h5>
          <p>
            We use industry-standard encryption and security protocols to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h5 className="mt-4">4. Cookies & Tracking</h5>
          <p>
            We use cookies and similar tracking technologies to enhance user experience, understand user behavior, and improve our services. You can control cookie preferences through your browser settings.
          </p>

          <h5 className="mt-4">5. Third-Party Disclosure</h5>
          <p>
            We do not sell, trade, or transfer your personal information to third parties, except as required to fulfill bookings or comply with legal obligations.
          </p>

          <h5 className="mt-4">6. Your Rights</h5>
          <p>
            You may request access to, correction of, or deletion of your personal data by contacting us at <strong>info@amtraktrainticket.com</strong>.
          </p>

          <h5 className="mt-4">7. Policy Updates</h5>
          <p>
            We may update this Privacy Policy from time to time. All updates will be posted on this page with the revised date.
          </p>

          <p className="mt-4">
            <strong>Effective Date:</strong> April 17, 2025
          </p>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default Page
