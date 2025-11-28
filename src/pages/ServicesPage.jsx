import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import Navbar from "../components/Navbar";
import Service from "../components/ServiceCard";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import "../styles/ServicesPage.css";
import { services } from "../data/data";
import WCUImage from "../assets/wcu/wcubg.png";
import Persona from "../assets/wcu/persona.png";



function ServicesPage() {

    const servicedisplays = services.map((service) => (
        <Service 
            key = {service.id}
            image = {service.img}
            category = {service.category}
            description = {service.description}
            alt = {service.alt}
        />
    ))

    useRevealOnScroll([
        {selector: ".why-choose-us-info", start: "300px"},
        {selector: ".why-choose-us-image", start: "-300px"}
    ]);

    return(
        <div className = "service-container" style = {{display: "flex", flexDirection: "column", gap: "auto", position: "relative", overflow: "hidden"}}>
            <Navbar />

            <div className = "ellipse2-blur-layer"></div>
            <div className = "ellipse3-blur-layer"></div>
            <div className = "ellipse4-blur-layer"></div>
            <div className = "ellipse5-blur-layer"></div>

            <div className = "blue-rectangle-layer"></div>
            
            <div className = "content-layer">
                <div className = "page-header">
                    <h1 style = {{fontSize: "150px", margin: "0px"}}>Service</h1>
                    <p style = {{fontSize: "50px", margin: "0px"}}><strong><em>Professionalism</em></strong> with<strong><em> good deal</em></strong></p>
                </div>
                <div className = "services-cards-display-container">
                    {servicedisplays}
                </div>
                <div style = {{textAlign: "center", marginTop: "150px"}}>
                    <button className = "request-service-btn">
                        Request a Service
                        <FontAwesomeIcon className = "request-service-btn-icon" icon = {faArrowRight}/>
                    </button>
                </div>
                <div className = "why-choose-us-container">
                    <div className = "why-choose-us-image autoshow" style = {{position: "relative", width: "482px", height: "335px"}}>
                        <img src = {WCUImage} alt = "why choose us?" className = "wcu-image-bg"/>
                        <img src = {Persona} alt = "persona" className = "wcu-image-persona"/>
                    </div>
                    <div className = "why-choose-us-info autoshow" style = {{width: "400px"}}>
                        <p style = {{fontSize: "50px", margin: "0px"}}>Why Choose Us?</p>
                        <ul>
                            <li><strong><em>We Are Reliable</em></strong>: You Can Count On Us To Deliver Every Time.</li>
                            <li><strong><em>We Are Creative</em></strong>: We Turn Ideas Into Fresh, Impactful Digital Experiences.</li>
                            <li><strong><em>We Are Collaborative</em></strong>: We Work Closely With You To Bring Visions To Life.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className = "blur-layer"></div>
        </div>
    )
}

export default ServicesPage;