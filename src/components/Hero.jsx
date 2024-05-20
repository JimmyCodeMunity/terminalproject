import React from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion'; // Import motion from Framer Motion
import 'animate.css';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather'
import Stats from './Stats';

const Hero = () => {
    return (
        <section className="bg-primary w-full flex-1" id='hero' >
            <div className="flex md:flex-row item-start justify-between flex-col py-6 sm:py-20">
                <div className="flex flex-1 justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
                <div className="sm:py-5">
                <a href="" className="border border-white border-2xl p-1 px-4 rounded-2xl text-gradient flex justify-center items-center space-x-3">Learn Whats New <Icon.ChevronRight color="white" size={20}/> </a>
                </div>    
                
                <div className="items-center justify-between w-full">
                        <h1 className="text-white font-poppins flex-1 font-normal ss:text-[50px] text-[20px] ss:leading-[60px] leading-[75px]">
                            Building Your<br className="hidden sm:block" /> {" "}
                            <span className="text-white">future in</span>
                            <br className="hidden sm:block" />
                        </h1>
                    </div>

                    <h1 className="text-gradient font-poppins font-semibold text-[40px] ss:leading-[100px] ss:text-[68px]">
                        Programming
                    </h1>
                    <p className="md:max-w-[500px] font-poppins text-white relative font-normal text-dimWhite text-[18px] leading-[30px]">
                        Grow in Tech,Upskill in your Knowledge <span> </span>
                        <br className="md:hidden block" />
                        and get a first class developer Experience
                    </p>

                    <Link to="/" className="bg-secondary md:my-8 my-4 space-y-2 justify-center items-center flex h-12 w-40 rounded-xl p-3 text-black front-poppins font-semibld">
                        Get Started
                        <Icon.ChevronRight color='black' size={20} />
                    </Link>

                </div>

                <LazyMotion features={domAnimation}>
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }} // Set initial animation properties
                        animate={{ opacity: 1, x: 0 }} // Set animation on reload
                        transition={{ duration: 2.0 }} // Set animation duration
                        className="animate-fade-left flex-1 flex h-full justify-center items-center md:my-10 relative"
                    >
                        <img src="../images/robo3.png" className="animate__flash w-[50%] h-[50%] relative z-[5]" />
                        <div className="absolute z-[0] w-[70%] h-[55%] top-0 pink__gradient" />
                        <div className="absolute z-[1] w-[100%] h-[100%] rounded-full bottom-40 white__gradient" />
                        <div className="absolute z-[0] w-[70%] h-[50%] right-20 bottom-20 blue__gradient" />
                    </motion.div>
                </LazyMotion>
            </div>


            
        </section>
    );
}

export default Hero;
