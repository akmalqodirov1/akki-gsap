import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(prev => !prev)
  }
  return (
    <div>
      <div className='navbar'>
        <Link className='logo'><h1>🫧 akki</h1></Link>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
        <button className='burger' onClick={handleShow}><img src="../../src/assets/images/burger.svg" alt="" /></button>
      </div>
      

      {show && <div className='navbar-burger'>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </div>}
    </div>
  )
}

export default Navbar
