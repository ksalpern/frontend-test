import './Header.module.scss'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click)

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 10) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <a href='/'></a>
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
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : ((<FaBars size={20} style={{ color: '#fff' }} />))}
            </div>
        </div>
    )
}

export default Header