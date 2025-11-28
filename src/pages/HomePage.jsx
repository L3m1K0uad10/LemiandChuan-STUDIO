import React from "react";

import Brain from "../assets/brain-blue.png";
import BrainGif from "../assets/brain.gif";
import Navbar from "../components/Navbar";
import "../styles/HomePage.css";



function HomePage() {
    return(
        <div className = "homepage-container">
            <Navbar />

            <section className = "homepage-hero-section">
                <h3>Through intuitive design, immersive visuals, and meaningful storytelling, we create experiences that people don't just see -- they truly feel.</h3>

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
                    <img src={BrainGif} alt="blue brain" style={{position: "absolute", right: "-1%", bottom: "25%", width: "40%", height: "auto", zIndex: 3, transform: "translate(0, 0)"}}/>
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