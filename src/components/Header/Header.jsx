import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

function Header() {

    const cartLength = useSelector(state => state.cart.length)

    return (
        <header className='w-full bg-inherit p-4 shadow-md'>
            <div className="header-container w-[90%] m-auto flex justify-between items-center">
                <div className="search">
                    <img src="../../images/reduxLogo.png" alt="Not found!" className='w-[35px]'/>
                </div>
                <div className="header-logo">
                    <Link to="/home"><h1 className='text-3xl font-bold'>Products</h1></Link>
                </div>
                <div className="header-cart relative">
                    <Link to="/cart" >
                        <IoCartOutline className='cursor-pointer text-xl ' />
                        {cartLength > 0 && (
                            <div className='w-[12px] h-[12px] bg-red-500 text-white flex justify-center items-center rounded-full absolute top-[-4px] right-[-3px]'>
                                <span className='text-[10px]'>{cartLength}</span>
                            </div>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header