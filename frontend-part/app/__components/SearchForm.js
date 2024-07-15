import React, { useState } from 'react'
import axios from 'axios'


export default function SearchForm({renderSearchData}) {
    const [origin , setOrigin] = useState("JFK");
    const [destination , setDestination] = useState("DEL");
    const [cabin , setCabin] = useState("Economy");

    
const headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
}

const json_data = {
    'origin': origin,
    'destination': destination,
    'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
    ],
    'stops': 2,
    'departureTimeFrom': '2024-07-09T00:00:00Z',
    'departureTimeTo': '2024-10-07T00:00:00Z',
    'isOldData': false,
    'limit': 302,
    'offset': 0,
    'cabinSelection': [
        cabin,
    ],
    'date': '2024-07-09T12:00:17.796Z',
}
    
  const handleSearch = (e) => {
    e.preventDefault();    
    axios.post('https://cardgpt.in/apitest', json_data, { headers })
        .then(response => response.data)
        .then(response => response.data)
        .then(data => {
            if(data.length) {
                renderSearchData(data);
            } else {
                console.log("try again");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
  }

    return (
        <div className='flex flex-col items-center justify-center min-h-[100vh] w-full'>
            <div className="py-4">
                <h1 className="text-4xl font-medium">Choose origin and Destination Airports:</h1>
            </div>

            <form className="w-[98%] max-w-[500px] rounded-md p-4 flex flex-col gap-8 items-center justify-center" onSubmit={handleSearch}>
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

                <button type='submit' className='py-2 px-6 bg-sky-800/70 hover:bg-sky-500/70 active:bg-blue-700 rounded-lg outline-none'>Search</button>
            </form>
        </div>
    )
}
