import React from "react";



function Service(props) {
    
    return (
        <div className = "service-card" style = {{width: "280px"}}>
            <img style = {{width: "100%", borderRadius: "20px"}} src = {props.image} alt = {props.alt} />
            <h4 style = {{marginBottom: "0px", marginTop: "20px",color: "#999999", fontSize: "20px"}}>{props.category}</h4>
            <p style = {{margin: "0px"}}>{props.description}</p>
        </div>
    )
}


export default Service;