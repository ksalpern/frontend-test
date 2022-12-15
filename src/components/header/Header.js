import './Header.scss'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from './Logo';

const Header = () => {
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click)

    return (
        <div className='header'>
            <Logo />
            <ul className={click ? "nav__menu active" : "nav__menu"}>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Our mission</a>
                </li>
                <li>
                    <a href='#'>Places</a>
                </li>
                <li>
                    <a href='#'>Team</a>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#000' }} />) : ((<FaBars size={20} style={{ color: '#000' }} />))}
            </div>
        </div>
    )
}

export default Header