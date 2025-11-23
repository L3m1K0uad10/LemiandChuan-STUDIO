import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



function Project(props) {
    
    return (
        <div className = "project-card">
            <img style = {{width: "100%"}} src = {props.image} alt = {props.alt} />
            <h4 style = {{marginBottom: "0px", color: "#999999"}}>{props.category}</h4>
            <h2 style = {{margin: "0px"}}>
                {props.title}
                <FontAwesomeIcon style = {{transform: "rotate(315deg)", color: "#0A15A7"}} icon = {faArrowRight}/>
            </h2>
        </div>
    )
}


export default Project;