import React, { useState } from 'react';
import './navbar.css'
import { Link } from 'react-scroll';
import { FaRegMessage } from "react-icons/fa6";
import { FaEllipsis  } from "react-icons/fa6";
import { TbCircleLetterDFilled } from "react-icons/tb";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const toggleTheme = () => {
        const root = document.documentElement;
        if (isDarkTheme) {
            root.style.setProperty('--primary-color', 'rgb(240, 240, 240)');
            root.style.setProperty('--light-primary-color', 'rgb(250, 250, 250)');
            root.style.setProperty('--lighter-primary-color', 'rgb(255, 255, 255)');
            root.style.setProperty('--text-color', 'black');
            root.style.setProperty('--menu-button-color', 'white');
            root.style.setProperty('--filter', 'invert(1)');
        } else {
            root.style.setProperty('--primary-color', 'rgb(30, 30, 30)');
            root.style.setProperty('--light-primary-color', 'rgb(40, 40, 40)');
            root.style.setProperty('--lighter-primary-color', 'rgb(50, 50, 50)');
            root.style.setProperty('--text-color', 'white');
            root.style.setProperty('--menu-button-color', 'black');
            root.style.setProperty('--filter', 'none');
        }
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div>
            <nav className='navbar'>
                <TbCircleLetterDFilled className='logo'/>
                <div className='desktopMenu'>
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
                    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link>
                </div>
                <button className='themeToggle' onClick={toggleTheme}>
                    {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
                </button>
                <button className='desktopMenuBtn' onClick={() => {
                    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}>
                    <FaRegMessage className='desktopMenuImg'/>
                    Contanct Me
                </button>
                <FaEllipsis className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
                <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
                    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
                    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Clients</Link>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contanct</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;