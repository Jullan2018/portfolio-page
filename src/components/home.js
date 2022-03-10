import React, {Component} from "react";
import {Link} from 'react-scroll';
import '../components/home.css';
import '../components/about.css';
import '../components/work.css';
import '../components/contact.css';
import headerLogo from '../img/headerlogo.png';
import aboutPhoto from '../img/aboutme.jpg'
export default class Home extends Component {
    render() {
        return (
    <>
    {/*Home Section*/}
    <div id="home">
        <div class='container-1'>
            <div class="intro-text">
                <h2>
                    HELLO I'M
                </h2>
                    <h2 style={{fontSize:"7vw"}}>
                    JULLAN<br/> QUEVEDO
                    </h2>
                <h2 style={{fontSize:"1.5vw",fontFamily:"Courier New"}}>SOFTWARE DEVELOPER</h2>
                </div>
                <div class="contact-btn">
                    <Link to="contact" spy={true} smooth={true}>Contact Me</Link>
                </div>
                <div class="header-logo">
                    <img src={headerLogo} height="500vh" width="500vw" alt="JSQ"/>
                </div>
        </div>
    </div>
    {/*About Section*/}
    <div id="about">
            <div class="container-2">
            <div class="about-heading">
                <h2>About Me</h2>
            </div>
            <div class="about-me">
            <p>A recent Bachelor of Computer Science Graduate ( Major in Software Development) of Auckland of University (AUT) looking for position in frontend or full-stack development </p><br/>
            <p>Knowledge of the Agile/Scrum Framework at an entry level, ability to function within a scrum team and have a basic understanding of the roles that are involved within the framework.  
               Ability to be flexible and adaptable in any work environment, as demonstrated from my past and present work experience.</p>
             <p> Passionate toward the idea of continuously learning, to improve my way of working
                Skilled in web development at a graduate level, warehouse management system and knowledge in different programming such as C, Java, JavaScript, HTML, CSS and others. </p>
            </div>
            <div class="about-photo">
                <img src={aboutPhoto} height="600" width="600" alt="JQ"/>    
            </div>
            </div>
    </div>
    {/*Work Section*/}
    <div id="work">
    <div class="container-3">
        <div class="work-heading">
    <h2>Work</h2>
    </div>
    </div>
    </div>
    {/*Contact Section*/}
    <div id="contact">
    <div class="container-4">
        <div class="contact-heading">
    <h2>Contact Me</h2>
    </div>
    </div>
    </div>
    </>
    )
    }
}