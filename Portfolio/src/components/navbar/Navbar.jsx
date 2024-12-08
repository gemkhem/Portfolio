import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <header className='navbar'>
            {/* logo */}
            <Link to={"/"} className='logo'>LOGOOO</Link>

            {/* nav-items */}
            <nav className="nav-items">
                <ul>
                    <li>
                        <Link className='nav-link' to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to={"/services"}>Services</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to={"/prtfolio"}>Portfolio</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar
