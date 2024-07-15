"use client"
import React, { useState } from 'react'
import SearchForm from './__components/SearchForm'
import FlightInfoCard from './__components/FlightInfoCard';

export default function page() {  
  const [flightData , setFlightData] = useState([]);
  const renderSearchData = (data) => {
    setFlightData(data);
    console.log(data);
  }

  return (
    <div className=''>
      <SearchForm renderSearchData={renderSearchData}/>

      {
        flightData.map((data , index) => <FlightInfoCard key={index} data={data}/>)
      }

    </div>
  )
}