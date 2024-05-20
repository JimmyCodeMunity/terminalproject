import React from 'react';
import { languages, stats } from '../constants';
import 'animate.css'

const Languages = () => {
    return (
        <section className='w-full flex-1 mx-auto text-center'>
            <div className="flex md:flex-row item-start justify-between flex-col py-6 sm:py-16">
                {languages.map((language) => (
                    <div key={language.id} className='sm:px-16 px-6'>
                        <img src={language.image} className="h-12 w-12 object-cover" alt="" />

                    </div>
                ))}
            </div>
        </section>
    );
}

export default Languages;