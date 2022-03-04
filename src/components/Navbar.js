import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false)
  
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
  }

  }, [])


  return (
    <nav>
    {(toggleMenu || screenWidth > 500) && (
    <ul className="list">
    <li className="items">Home</li>
    <li className="items">Services</li>
    <li className="items">Contact</li>
  </ul>
    )}

    <button onClick={toggleNav} className="btn">BTN</button>
  </nav>
  )
}

export default Navbar;
