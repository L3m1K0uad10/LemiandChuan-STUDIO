import React from "react";

import SvgLogo from "../assets/logo.svg?react";
import Brain from "../assets/brain-blue.png";



function HomePage() {
    return(
        <div className = "homepage-container" style = {{display: "flex", flexDirection: "column", gap: "auto", height: "100%"}}>
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

            <section className = "homepage-hero-section" style={{position: "relative", height: "100%", width: "100%", paddingTop: "40px", display: "flex", flexDirection: "column", justifyContent: "center", /* gap: "30px" */}}>
                <h3 style = {{width: "580px"}}>Through intuitive design, immersive visuals, and meaningful storytelling, we create experiences that people don't just see -- they truly feel.</h3>

                <div style={{position: "relative", width: "100%", /* maxWidth: "900px", *//* height: "400px", */display: "flex", alignItems: "center"}}>
                    <div style={{width: "70%", backgroundColor: "white", padding: "30px", borderRadius: "20px", position: "relative", zIndex: 2, marginTop: "30px"}}>
                        <div style = {{width: "580px"}}>
                            <h1 style={{ color: "black", margin: 0, fontSize: "46px" }}>We Craft Digital Experiences That Matter</h1>
                        </div>
                        <p style = {{width: "450px", color: "black"}}>
                            We Blend Creativity, Emotion, And Innovation To Create 
                            Digital Worlds That Your Audience Can Connect With.
                        </p>
                        <button style= {{borderRadius: "20px", backgroundColor: "#0A15A7", fontStyle: "bold"}}>
                            Request a service
                        </button>
                    </div>
                    <img src={Brain} alt="blue brain" style={{position: "absolute", right: "-1%", bottom: "25%", width: "40%", height: "auto", zIndex: 3, transform: "translate(0, 0)"}}/>
                </div>

                <div style = {{marginTop: "20px", display: "flex", gap: "10px", marginLeft: "auto"}}>
                    <button style= {{padding: "10px", border: "1px solid gray", borderRadius: "20px", fontSize: "12px"}}>UI/UX</button>
                    <button style= {{padding: "10px", border: "1px solid gray", borderRadius: "20px", fontSize: "12px"}}>DEVELOPEMENT</button>
                    <button style= {{padding: "10px", border: "1px solid gray", borderRadius: "20px", fontSize: "12px"}}>DATA SCIENCE</button>
                </div>
            </section>
        </div>
    )
}

export default HomePage;