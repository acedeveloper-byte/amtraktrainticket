'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaCalendarAlt } from 'react-icons/fa'

const TrainSearch = () => {
  return (
    <section
      className="bg-cover bg-center text-white d-flex flex-column align-items-center justify-content-center home-poster-layout">
      {/* Heading */}
      <div className="mb-4 mob-content-layout">
        <h1 className="fw-bold display-5 ">Find Affordable Train Rides!</h1>
        <p className="lead ">Connecting cities and towns with comfort and savings.</p>
      </div>

      {/* Search Box */}
      <div className="bg-white p-4 rounded-4 shadow d-flex flex-column flex-md-row gap-3 align-items-stretch mob-layout" >
        {/* From */}
        <div className="border rounded-3 px-3 py-2 w-100">
          <label className="fw-bold small text-muted">From</label>
          <input type="text" placeholder="Departure Station" className="form-control border-0 p-0" />
        </div>

        {/* To */}
        <div className="border rounded-3 px-3 py-2 w-100">
          <label className="fw-bold small text-muted">To</label>
          <input type="text" placeholder="Arrival Station" className="form-control border-0 p-0" />
        </div>

        {/* Departure Date */}
        <div className="border rounded-3 px-3 py-2 w-100">
          <label className="fw-bold small text-muted">Departure</label>
          <div className="d-flex align-items-center">
            <input type="date" className="form-control border-0 p-0" />
            <FaCalendarAlt className="ms-2 text-muted" />
          </div>
        </div>

        {/* Passengers & Class */}
        <div className="border rounded-3 px-3 py-2 w-100">
          <label className="fw-bold small text-muted">Passengers & Class</label>
          <input type="text" placeholder="1 Adult, Sleeper" className="form-control border-0 p-0" />
        </div>

        {/* Search Button */}
        <div className="d-flex align-items-end">
          <button className="btn btn-primary text-white fw-bold px-4 py-2 rounded-3">
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

export default TrainSearch
