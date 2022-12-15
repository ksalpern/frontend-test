import './NavBar.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTime, FaTimes } from 'react-icons/fa'

const NavBar = () => {
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
      <Link to='/'> <h1>GLX TRVL</h1> </Link>
      <ul className={click ? "nav__menu active" : "nav__menu"}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li>
          <Link to='/training'>Training</Link>
        </li>
        <li>
          <Link to='/contacts'>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : ((<FaBars size={20} style={{ color: '#fff' }} />))}
      </div>
    </div>
  )
}

export default NavBar