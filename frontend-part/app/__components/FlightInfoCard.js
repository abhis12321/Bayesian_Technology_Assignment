import Image from 'next/image'
import React from 'react'

export default function FlightInfoCard({ data , origin , destination }) {
    return (
        <div className='w-[98%] max-w-[350px] flex flex-col gap-8 items-center justify-center rounded-xl bg-emerald-800/50 py-10'>
            <Image src={'/logo.png'} alt='logo' width={20} height={20} />
            <div className="text-2xl">{data.partner_program}</div>
            <div className="opacity-60">
                <div className="">{origin} -&gt; {destination}</div>
                <div className="text-[12px]">{origin} -&gt; {destination}</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex gap-6 text-4xl font-semibold">{data.min_business_miles ? data.min_business_miles : "N/A"} <div className="text-base font-light">+${data.min_business_tax}</div></div>
                <div className="text-sm opacity-55">Min Bussiness Miles</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex gap-6 text-4xl font-semibold">{data.min_economy_miles ? data.min_economy_miles : "N/A"} <div className="text-base font-light">+${data.min_economy_tax}</div></div>
                <div className="text-sm opacity-55">Min Bussiness Miles</div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex gap-6 text-4xl font-semibold">{data.min_first_miles ? data.min_first_miles : "N/A"} <div className="text-base font-light">+${data.min_first_tax}</div></div>
                <div className="text-sm opacity-55">Min Bussiness Miles</div>
            </div>
        </div>
    )
}
