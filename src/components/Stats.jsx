import React from 'react';
import { languages, stats } from '../constants';
import 'animate.css'

const Stats = () => {
    return (
        <section className='flex flex-row flex-wrap items-center justify-center sm:my-16 my-6'>
            {stats.map((stat) => (
                <div key={stat.id} className='sm:px-16 px-6 justify-center items-center'>
                    <div className="flex md:flex-row flex-col space-x-4 justify-center items-center">
                        <img src={stat.icon} className="h-12 w-12 object-cover" alt="" />
                        <div>
                        <p className="text-[20px] text-white font-normal font-poppins">{stat.number}</p>
                        <p className="text-[20px] text-white font-normal font-poppins">{stat.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Stats;