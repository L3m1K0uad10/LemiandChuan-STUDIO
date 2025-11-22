import React from "react";



function Project(props) {
    
    return (
        <div className = "project-card">
            <img style = {{width: "100%"}} src = {props.image} alt = {props.alt} />
            <h4 style = {{marginBottom: "0px", color: "#999999"}}>{props.category}</h4>
            <h2 style = {{margin: "0px"}}>{props.title}</h2>
        </div>
    )
}


export default Project;