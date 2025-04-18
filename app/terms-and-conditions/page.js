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
          <h1 className="mb-4 fw-bold text-center">Terms and Conditions</h1>
          <hr />
          <p>
            Welcome to <strong>AmtrakTrainTicket.com</strong>. By accessing or using our website and services, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
          </p>

          <h5 className="mt-4">1. Use of Website</h5>
          <p>
            You agree to use this website for lawful purposes only and in a manner consistent with applicable local, state, and international laws and regulations. You are responsible for ensuring that your use of this website complies with all relevant laws.
          </p>

          <h5 className="mt-4">2. Account Registration</h5>
          <p>
            To use certain features of the website, such as booking tickets or saving travel preferences, you may need to create an account. You agree to provide accurate and complete information during registration and to update it as necessary.
          </p>

          <h5 className="mt-4">3. Booking and Payment</h5>
          <p>
            When you book a ticket through our website, you agree to provide valid payment information and authorize us to charge the appropriate fees for your purchase. All transactions are subject to our cancellation and refund policy.
          </p>

          <h5 className="mt-4">4. Cancellation and Refunds</h5>
          <p>
            Cancellations and refund requests must be submitted in accordance with our Refund Policy, which is available on our website. Certain conditions and fees may apply.
          </p>

          <h5 className="mt-4">5. Intellectual Property</h5>
          <p>
            All content on this website, including text, images, graphics, logos, and software, is the property of <strong>AmtrakTrainTicket.com</strong> or its licensors and is protected by copyright and intellectual property laws. You may not use, reproduce, or distribute any content without our express permission.
          </p>

          <h5 className="mt-4">6. Limitation of Liability</h5>
          <p>
            We are not liable for any damages, losses, or other consequences resulting from your use of the website or services. This includes, but is not limited to, issues arising from technical failures, incorrect information, or misuse of the website.
          </p>

          <h5 className="mt-4">7. Third-Party Links</h5>
          <p>
            Our website may contain links to third-party websites that are not controlled or operated by us. We are not responsible for the content, privacy policies, or practices of these websites.
          </p>

          <h5 className="mt-4">8. Modification of Terms</h5>
          <p>
            We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page with the updated date. It is your responsibility to review these terms periodically.
          </p>

          <h5 className="mt-4">9. Governing Law</h5>
          <p>
            These Terms and Conditions are governed by the laws of the state in which <strong>AmtrakTrainTicket.com</strong> operates. Any disputes arising from the use of this website will be subject to the jurisdiction of the courts in that state.
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
