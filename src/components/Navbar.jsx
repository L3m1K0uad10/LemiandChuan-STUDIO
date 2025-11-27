import react from "react";
import { Link, NavLink } from "react-router-dom";

import SvgLogo from "../assets/logo.svg?react";



const Navbar = () => {
    return (
        <nav className = "homepage-nav-bar" style = {{height: "100px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <SvgLogo className="site-logo" width="100" height="75" />
            <ul className = "nav-links" style = {{listStyleType: "none", display: "flex", gap: "30px", fontSize: "18px", margin: "0"}}>
                <li>
                    <NavLink 
                        to = "/" 
                        className = {({isActive}) => (isActive ? 'active-link' : 'inactive-link')}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = "/projects" 
                        className = {({isActive}) => (isActive ? 'active-link' : 'inactive-link')}
                    >
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = "/services" 
                        className = {({isActive}) => (isActive ? 'active-link' : 'inactive-link')}
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = "/about-us"
                        className = {({isActive}) => (isActive ? 'active-link' : 'inactive-link')}
                    >
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = "/contact-us" 
                        className = {({isActive}) => (isActive ? 'active-link' : 'inactive-link')}
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;