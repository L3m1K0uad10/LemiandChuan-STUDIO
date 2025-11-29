import React from "react";



function Service(props) {
    
    return (
        <div className = "service-card">
            <img src = {props.image} alt = {props.alt} />
            <h4>{props.category}</h4>
            <p>{props.description}</p>
        </div>
    )
}


export default Service;