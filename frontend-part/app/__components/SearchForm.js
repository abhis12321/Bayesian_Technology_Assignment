"use client"
import React, { useState } from 'react'

export default function SearchForm() {
    const [origin , setOrigin] = useState("JFK");
    const [destination , setDestination] = useState("DEL");
    const [cabin , setCabin] = useState("Economy");

    return (
        <div className='flex flex-col items-center justify-center min-h-[100vh] w-full'>
            <div className="py-4">
                <h1 className="text-4xl font-medium">Choose origin and Destination Airports:</h1>
            </div>

            <form className="w-[98%] max-w-[500px] rounded-md p-4 flex flex-col gap-8 items-center justify-center">
                <div className="relative w-full">
                    <div className="absolute top-3 left-10 z-10 opacity-50 text-xs">Origin</div>
                    <select name="status" id="" className="w-full xs:w-fit outline-none pt-10 pb-3 px-8 rounded-lg text-xl font-light focus:shadow-[0_0_3px_white] bg-black/70" value={origin} onChange={e => setOrigin(e.target.value)}>
                        <option value="JFK" className='font-light'>JFK</option>
                        <option value="DEL" className='font-light'>DEL</option>
                        <option value="SYD" className='font-light'>SYD</option>
                        <option value="BOM" className='font-light'>BOM</option>
                        <option value="BNE" className='font-light'>BNE</option>
                        <option value="BLR" className='font-light'>BLR</option>
                    </select>
                </div>

                <div className="relative w-full">
                    <div className="absolute top-3 left-10 z-10 opacity-50 text-xs">Destination</div>
                    <select name="status" id="" className="w-full xs:w-fit outline-none pt-10 pb-3 px-8 rounded-lg text-xl font-light focus:shadow-[0_0_3px_white] bg-black/70" value={destination} onChange={e => setDestination(e.target.value)}>
                        <option value="JFK" className='font-light'>JFK</option>
                        <option value="DEL" className='font-light'>DEL</option>
                        <option value="SYD" className='font-light'>SYD</option>
                        <option value="LHR" className='font-light'>LHR</option>
                        <option value="CDG" className='font-light'>CDG</option>
                        <option value="DOH" className='font-light'>DOH</option>
                        <option value="SIN" className='font-light'>SIN</option>
                    </select>
                </div>

                <div className="relative w-full bg-lime-900 rounded-lg">
                    <div className="absolute top-3 left-10 z-10 opacity-50 text-xs">Cabin Section</div>
                    <select name="status" id="" className="w-full xs:w-fit outline-none pt-10 pb-3 px-8 rounded-lg text-xl font-light shadow-[0_0_1px_gray] focus:shadow-[0_0_3px_white] bg-black/65 border-b-[1px]" value={cabin} onChange={e => setCabin(e.target.value)}>
                        <option value="Economy" className='font-light'>Economy</option>
                        <option value="Business" className='font-light'>Business</option>
                        <option value="First" className='font-light'>First</option>
                    </select>
                </div>

                <button type='submit' className='py-2 px-6 bg-sky-800/70 hover:bg-sky-500/70 active:bg-blue-700 rounded-lg outline-none'>search</button>
            </form>
        </div>
    )
}
