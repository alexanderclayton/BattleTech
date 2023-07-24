import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/mechs'>Mechs</Link>
            <Link to='/about'>About Us</Link>
        </div>
    </div>
  )
}

export default Navbar