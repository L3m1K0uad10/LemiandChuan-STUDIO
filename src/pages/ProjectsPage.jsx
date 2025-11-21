import React from "react";

import Navbar from "../components/Navbar";
import "../styles/ProjectsPage.css";


function ProjectsPage() {
    
    return(
        <div className = "projectspage-container" style = {{display: "flex", flexDirection: "column", gap: "auto", height: "100%", position: "relative"}}>
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
            </div>
        </div>
    )
}

export default ProjectsPage;