import Image from 'next/image'
import React from 'react'

export default function FlightInfoCard({data}) {
    console.log(data);
  return (
    <div className='flex flex-col gap-6 items-center justify-center rounded-xl'>
        <Image src={'/logo.png'} alt='logo' width={20} height={20} />
    </div>
  )
}
