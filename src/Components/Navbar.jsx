import React from 'react'
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import navLinks from '../Components/NavLinks';
function Navbar({pageLinks}) {

    const { theme, toggleTheme } = React.useContext(ThemeContext);
   

    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="flex-1">
                <Link to="/" id="logo" className="btn btn-ghost normal-case text-xl">Kasansa Kuya Portfolio</Link>
            </div>
            <div className="flex-wrap">
                <ul className=" text-sm lg:text-base menu menu-horizontal justify-center ">
                    {navLinks.map((page) => {
                    if (page.location.includes(pageLinks)) {
                        return (
                            <li>{page.element}</li>
                        )
                    }
                    })}
                    <li className='flex flex-row hover:bg-base-300 m-auto'><span>Dark Mode:</span><input type="checkbox" id='theme' className="toggle m-2 ml-0" checked={theme==="business"} onChange={toggleTheme}/></li>
                </ul>
            </div>
        </div>
    )
}



export default Navbar