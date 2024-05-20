import React, { useContext, useEffect, useState } from 'react';
import { navLinks } from '../constants'
import { AlignLeft, X } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import * as Icon from 'react-feather'



const Navbar = () => {
    const navigate = useNavigate()
    const [logstate, setLogstate] = useState('');

    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50 bg-primary smooth md:px-9') : setStickyClass('relative');
        }
    };

    useEffect(() => {
        const mystate = localStorage.getItem('logstate');
        setLogstate(mystate);
    }, [])

    const handleLogout = () => {
        // Perform logout actions, such as clearing token from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('logstate');
        localStorage.removeItem('user');
        console.log("user logged out")
        navigate('/login')

    };
    const [toggle, setToggle] = useState(false);
    return (
        <nav id="navbar" className={`top-0 flex-1 my-6 md:px-15 px-6 flex justify-between items-center navbar fixed start-0 z-50 w-full ${stickyClass}`}>
            <div className="flex-row space-x-3 flex justify-between items-center">

                <h1 className="text-[30px] font-semibold font-poppins text-white"><span className="text-gradient">T</span>ermin<span className="text-gradient">al</span></h1>
            </div>



            <ul className="list-none items-center hidden md:flex justify-end flex-1">
                {navLinks.map((nav, index) => (
                    <li key={index}
                        className={`font-poppins font-normal cursor-pointer text-[16px]
          ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white mr-10
          `}
                    >
                        <Link to={`${nav.path}`} className="text-white font-normal px-3 py-2 rounded-md text-sm">
                            {nav.name}
                        </Link>
                    </li>
                ))}

                {logstate === 'Authenticated' &&
                    <li className="font-poppins font-normal">
                        <button onClick={handleLogout} className="text-yellow-500">Logout</button>
                    </li>
                }





            </ul>

            <div className="md:hidden justify-end items-center flex"
            >

                <div onClick={() => setToggle(prev => !prev)} className="cursor-pointer">
                    {toggle ? <X color='white' size={30} /> : <AlignLeft color='white' size={30} />}
                </div>


                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none items-center flex flex-col justify-end flex-1">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white mr-10`}
                            >
                                <Link to={`${nav.path}`}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                        <li className="text-white list-none items-end">
                    <Link to="/login">Login</Link>
                </li>


                    </ul>
                </div>

            </div>


            <div className="hidden md:block">
                <li className="text-white list-none items-center">
                    <Link to="/login">Login</Link>
                </li>
            </div>

        </nav>


    );
}

export default Navbar;