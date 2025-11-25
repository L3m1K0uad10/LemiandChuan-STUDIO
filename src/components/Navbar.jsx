import react from "react";
import { Link } from "react-router-dom";

import SvgLogo from "../assets/logo.svg?react";



const Navbar = () => {
    return (
        <nav className = "homepage-nav-bar" style = {{height: "100px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <SvgLogo className="site-logo" width="100" height="75" />
            <ul className = "nav-links" style = {{listStyleType: "none", display: "flex", gap: "30px", fontSize: "18px", margin: "0"}}>
                <li><Link to = "/" style = {{color: "white"}} href="#">Home</Link></li>
                <li><Link to = "/projects" style = {{color: "white"}} href="#">Projects</Link></li>
                <li><Link to = "/services" style = {{color: "white"}} href="#">Services</Link></li>
                <li><Link style = {{color: "white"}} href="#">About Us</Link></li>
                <li><Link to = "/contact-us" style = {{color: "white"}} href="#">Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;