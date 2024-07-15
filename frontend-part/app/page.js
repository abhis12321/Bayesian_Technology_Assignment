"use client"
import React, { useState } from 'react'
import SearchForm from './__components/SearchForm'
import FlightInfoCard from './__components/FlightInfoCard';

export default function page() {
  const [origin , setOrigin] = useState("JFK");
  const [destination , setDestination] = useState("DEL");
  const [cabin , setCabin] = useState("Economy");

  
  const [flightData, setFlightData] = useState([]);

  const renderSearchData = (data) => {
    setFlightData(data);
  }

  return (
    <div className=''>
      <SearchForm renderSearchData={renderSearchData} origin={origin} setOrigin={setOrigin} destination={destination} setDestination={setDestination} cabin={cabin} setCabin={setCabin} />

      <div className="flex flex-wrap gap-5 items-center justify-center py-4">
        {
          flightData.map((data, index) => <FlightInfoCard key={index} data={data} origin={origin} destination={destination} />)
        }
      </div>

    </div>
  )
}