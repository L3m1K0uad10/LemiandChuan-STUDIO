import React from "react";

import Navbar from "../components/Navbar";
import Project from "../components/ProjectCard"
import "../styles/ProjectsPage.css";
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
        />
    ))

    return(
        <div className = "projectspage-container" style = {{display: "flex", flexDirection: "column", gap: "auto", position: "relative"}}>
            <Navbar />

            <div className = "ellipse2-blur-layer"></div>
            <div className = "ellipse3-blur-layer"></div>
            <div className = "ellipse4-blur-layer"></div>
            <div className = "ellipse5-blur-layer"></div>
            
            <div className = "content-layer">
                <div style = {{textAlign: "center", marginTop: "150px"}}>
                    <h1 style = {{fontSize: "150px", margin: "0px"}}>Projects</h1>
                    <p style = {{fontSize: "50px", margin: "0px"}}>From <strong><em>idea</em></strong> to <strong><em>realization</em></strong></p>
                </div>
                <div className = "showcasing-container" style = {{display: "flex", justifyContent: "center", gap: "10px", marginTop: "50px"}}>
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
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;