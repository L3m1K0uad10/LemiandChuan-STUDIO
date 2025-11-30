import react, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import SvgLogo from "../assets/logo.svg?react";



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className = "app-nav-bar">
            <SvgLogo className="site-logo" width="100" height="75" />
            <ul className = "nav-links">
                <li><NavLink to = "/" className = {({isActive}) => (isActive ? 'active-link' : 'inactive-link')}>Home</NavLink></li>
                <li><NavLink to = "/projects" className = {({isActive}) => (isActive ? 'active-link' : 'inactive-link')}>Projects</NavLink></li>
                <li><NavLink to = "/services" className = {({isActive}) => (isActive ? 'active-link' : 'inactive-link')}>Services</NavLink></li>
                <li><NavLink to = "/about-us" className = {({isActive}) => (isActive ? 'active-link' : 'inactive-link')}>About Us</NavLink></li>
                <li><NavLink to = "/contact-us" className = {({isActive}) => (isActive ? 'active-link' : 'inactive-link')}>Contact Us</NavLink></li>
            </ul>

            {/* HAMBURGER MENU PART */}
            <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
                <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
                <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>About Us</NavLink>
                <NavLink to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
            </div>

        </nav>
    )
}

export default Navbar;