import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faArrowRight } from "@fortawesome/free-solid-svg-icons"

import Navbar from "../components/Navbar";
import Project from "../components/ProjectCard";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
/* import "../styles/ProjectsPage.css"; */
import Show1 from "../assets/showcase/show-01.png";
import Show2 from "../assets/showcase/show-02.png";
import Show3 from "../assets/showcase/show-03.png";
import { projects } from "../data/data"



function ProjectsPage() {
    
    const projectdisplays = projects.map((project) => (
        <Project 
            key = {project.id}
            title = {project.title}
            image = {project.img}
            category = {project.category}
            alt = {project.alt}
        />
    ))

    useRevealOnScroll([
        {selector: ".call-container", start: "50px"},
        {selector: ".arc-blur-wrapper-1", start: "-150px"},
        {selector: ".arc-blur-wrapper-2", start: "150px"},
    ]);

    return(
        <div className = "projectspage-container" style = {{display: "flex", flexDirection: "column", gap: "auto", position: "relative"}}>
            <Navbar />

            <div className = "ellipse2-blur-layer"></div>
            <div className = "ellipse3-blur-layer"></div>
            <div className = "ellipse4-blur-layer"></div>
            <div className = "ellipse5-blur-layer"></div>
            
            <div className = "content-layer">
                <div className = "page-header">
                    <h1>Projects</h1>
                    <p>From <strong><em>idea</em></strong> to <strong><em>realization</em></strong></p>
                </div>
                <div className = "showcasing-container">
                    <img className = "showcase-image show-1" src = {Show1} alt = "project showcasing image 1" />
                    <img className = "showcase-image show-2" src = {Show2} alt = "project showcasing image 2" />
                    <img className = "showcase-image show-3" src = {Show3} alt = "project showcasing image 3" />
                </div>
                <div className = "projects-display-container">
                    <div className = "filters-container">
                        <button>UI/UX</button>
                        <button>DEVELOPEMENT</button>
                        <button>DATA SCIENCE</button>
                    </div>
                    <div className = "cards-container">
                        {projectdisplays}
                    </div>
                    <div style = {{textAlign: "center", marginTop: "50px"}}>
                        <button className = "load-more-btn">
                            LOAD MORE
                            <FontAwesomeIcon className = "load-more-btn-icon" icon = {faArrowsRotate}/>
                        </button>
                    </div>
                </div>
                <div style = {{display: "flex", justifyContent: "center", alignItems: "center", margin: "250px 0px"}}>
                    <div className = "call-container">
                        <h4>
                            Turn Your Ideas Into <strong><em>Digital Experiences That Leave A Lasting Impact</em></strong>
                        </h4>
                        <div style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <p>
                                You have a vision worth building — we bring it to life with design 
                                and technology that stand out. 
                            </p>
                        </div>
                        <div style = {{textAlign: "center"}}>
                            <button className = "request-service-btn">
                                Request a Service
                                <FontAwesomeIcon className = "request-service-btn-icon" icon = {faArrowRight}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "arc-blur-wrapper-1">
                <div className = "arc-blur-layer-1"></div>
            </div>

            <div className = "arc-blur-wrapper-2">
                <div className = "arc-blur-layer-2"></div>
            </div>
        </div>
    )
}

export default ProjectsPage;