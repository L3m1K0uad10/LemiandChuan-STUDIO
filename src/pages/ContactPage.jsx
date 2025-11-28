import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faXTwitter, faWhatsapp, faInstagram  } from "@fortawesome/free-brands-svg-icons"

import Navbar from "../components/Navbar";
import "../styles/ContactPage.css";



function ContactPage() {

    return(
        <div className = "contact-container" style = {{display: "flex", flexDirection: "column", gap: "auto", position: "relative", overflow: "hidden"}}>
            <Navbar />

            <div className = "ellipse2-blur-layer"></div>
            <div className = "ellipse3-blur-layer"></div>
            <div className = "ellipse4-blur-layer"></div>
            <div className = "ellipse5-blur-layer"></div>

            <div className = "blue-rectangle-layer-2"></div>
            
            <div className = "content-layer">
                <div className = "page-header">
                    <h1 style = {{fontSize: "150px", margin: "0px"}}>Contact Us</h1>
                    <p style = {{fontSize: "50px", margin: "0px"}}><strong><em>Let's talk</em></strong></p>
                </div>   
                <form className = "contact-us-form" action="">
                    <div className = "name-container" style = {{marginBottom: "12px"}}><input className = "glass" type = "text" placeholder = "Full name/Company name"/></div>
                    <div className = "email-container"><input className = "glass" type = "text" placeholder = "Email"/></div>
                    <div className = "service-btn-container">
                        <p>I'm interested on</p>
                        <div>
                            <button>UI/UX</button>
                            <button>DEVELOPMENT</button>
                            <button>DATA SCIENCE</button>
                        </div>
                    </div>
                    <div className = "textarea-container">
                        <p>Tell us more about your Project</p>
                        <textarea className = "glass" rows = "10" placeholder = "Write here"/>
                    </div>

                    <button className = "form-submit-btn" type = "submit" >SEND</button>
                </form> 
                <div className = "contact-us-more-info-section">
                    <p style = {{fontSize: "50px", margin: "0px", width: "500px", alignSelf: "flex-start"}}>Is there a fascinating project <span style = {{color: "gray"}}>brewing in your mind?</span></p>
                    <div className = "medias-container">
                        <p><FontAwesomeIcon className = "media-icon" icon = {faEnvelope}/> LemiandChuanstudio@gmail.com</p>
                        <div classNames = "social-medias">
                            <FontAwesomeIcon className = "media-icon" icon = {faXTwitter}/>
                            <FontAwesomeIcon className = "media-icon" icon = {faWhatsapp}/>
                            <FontAwesomeIcon className = "media-icon" icon = {faInstagram}/>
                        </div>
                    </div>
                    <p style = {{marginTop: "260px"}}><FontAwesomeIcon icon = {faCopyright}/>2025 L&C studio, All Rights reserved</p>
                </div>  
            </div>

            <div className = "blur-layer"></div>
        </div>
    )
}

export default ContactPage;