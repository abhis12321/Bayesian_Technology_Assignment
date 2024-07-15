"use client"
import React from 'react'
import SearchForm from './__components/SearchForm'

export default function page() {  
  const renderSearchData = (data) => {
    console.log(data);
  }

  return (
    <div className=''>
      <SearchForm renderSearchData={renderSearchData}/>
    </div>
  )
}