'use client'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const TopDestination = () => {
  const destinations = [
    { name: 'Paris', image: '/images/paris.jpg' },
    { name: 'London', image: '/images/london.jpg' },
    { name: 'Rome', image: '/images/rome.jpg' },
    { name: 'New York', image: '/images/new-york.jpg' },
  ]

  const CustomNextArrow = (props) => {
    const { onClick } = props
    return (
      <div
        className="custom-arrow next-arrow"
        onClick={onClick}
        style={{
          position: 'absolute',
          top: '45%',
          right: '-10px',
          zIndex: 10,
          cursor: 'pointer',
          fontSize: '24px',
          color: '#333',
          background: '#fff',
          borderRadius: '50%',
          padding: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}
      >
        <FaArrowRight />
      </div>
    )
  }

  const CustomPrevArrow = (props) => {
    const { onClick } = props
    return (
      <div
        className="custom-arrow prev-arrow"
        onClick={onClick}
        style={{
          position: 'absolute',
          top: '45%',
          left: '-10px',
          zIndex: 10,
          cursor: 'pointer',
          fontSize: '24px',
          color: '#333',
          background: '#fff',
          borderRadius: '50%',
          padding: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
        }}
      >
        <FaArrowLeft />
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <section className="py-5 position-relative">
      <div className="container position-relative">
        <h2 className="mb-4 fw-bold text-center">Top Destinations</h2>
        <Slider {...settings}>
          {destinations.map((dest, index) => (
            <div key={index} className="px-2">
              <div className="card border-0 shadow rounded-4 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  width={400}
                  height={250}
                  className="w-100 object-fit-cover"
                />
                <div className="p-3 bg-light">
                  <h5 className="mb-0 text-center">{dest.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default TopDestination
