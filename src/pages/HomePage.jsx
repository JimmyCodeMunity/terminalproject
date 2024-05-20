import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Languages from '../components/Languages';
import Stats from '../components/Stats';
import Idea from '../components/Idea';

const HomePage = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-primary">
      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>




      <div className="flex sm:px-16 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Hero />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Idea />
        </div>
      </div>

    </div>
  );
}

export default HomePage;
