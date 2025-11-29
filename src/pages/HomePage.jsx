import React from "react";

import Brain from "../assets/brain-blue.png";
import BrainGif from "../assets/brain.gif";
import Navbar from "../components/Navbar";
/* import "../styles/HomePage.css"; */



function HomePage() {
    return(
        <div className = "homepage-container">
            <Navbar />

            <section className = "homepage-hero-section">
                <h3>Through intuitive design, immersive visuals, and meaningful storytelling, we create experiences that people don't just see -- they truly feel.</h3>

                <div className = "white-box-container" style={{position: "relative", width: "100%", /* maxWidth: "900px", *//* height: "400px", */display: "flex", alignItems: "center"}}>
                    <div className = "white-box">
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
                    <img className = "brain-gif" src = {BrainGif} alt="blue brain"/>
                </div>

                <div className = "service-tags-container">
                    <button>UI/UX</button>
                    <button>DEVELOPEMENT</button>
                    <button>DATA SCIENCE</button>
                </div>
            </section>
        </div>
    )
}

export default HomePage;