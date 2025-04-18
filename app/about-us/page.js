'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


const AboutUs = () => {
  return (
    <>
    <Header/>
    <section className="py-5 bg-light">
      <Container>
        <h1 className="mb-4 fw-bold text-center">About Us</h1>
        <hr />
        <p>
          <strong>Amtrak Technologies Private Limited</strong> is a leading IT services provider, established in 1996 and headquartered in New Delhi, India. With decades of experience in the tech industry, our company specializes in computer-related activities including website maintenance, software solutions, and multimedia presentation development tailored for businesses across sectors.
        </p>
        <p>
          We pride ourselves on delivering innovative, reliable, and cost-effective digital solutions that drive efficiency and business growth. Our core philosophy revolves around customer-centric approaches and cutting-edge technology to help clients achieve their digital transformation goals.
        </p>
        <p>
          Amtrak Technologies operates with a dedicated team of professionals committed to excellence. Our state-of-the-art infrastructure and client-first methodology make us a trusted partner in the digital era.
        </p>
        <p>
          <strong>Corporate Address:</strong> 6 Community Centre, East of Kailash, New Delhi - 110065, India.
        </p>
        <p>
          <strong>Note:</strong> Amtrak Technologies is not affiliated with the U.S.-based Amtrak train services.
        </p>
      </Container>
    </section>

    <Footer/>

    </>
  )
}

export default AboutUs
