import react from "react";

import SvgLogo from "../assets/logo.svg?react";



const Navbar = () => {
    return (
        <nav className = "homepage-nav-bar" style = {{height: "100px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <SvgLogo className="site-logo" width="100" height="75" />
            <ul className = "nav-links" style = {{listStyleType: "none", display: "flex", gap: "30px", fontSize: "18px", margin: "0"}}>
                <li><a style = {{color: "white"}} href="#">Home</a></li>
                <li><a style = {{color: "white"}} href="#">Projects</a></li>
                <li><a style = {{color: "white"}} href="#">Services</a></li>
                <li><a style = {{color: "white"}} href="#">About Us</a></li>
                <li><a style = {{color: "white"}} href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;