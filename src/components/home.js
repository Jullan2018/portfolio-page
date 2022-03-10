import React, {Component} from "react";
import {Link} from 'react-scroll';
import '../components/home.css';
import '../components/about.css';
import '../components/work.css';
import '../components/contact.css';
import headerLogo from '../img/headerlogo.png';
import aboutPhoto from '../img/aboutme.jpg'
import {FiExternalLink} from 'react-icons/fi';


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
        <h2>My WORK</h2>
        </div>
            <div class="project-list">
                    <div class="pro card">
                        <h4>CabsOnline</h4><br/>
                        <p>A taxi-booking system designed in PHP and HTML. After each booking, the data is send and stored in MySQL for futher admin access.<br/>Once the booking has been confirmed, the system will provide the user pickup details </p><br/>
                        <a href="https://github.com/Jullan2018/CabsOnline" target="_blank" ><FiExternalLink/></a>
                        </div>
                        <div class="pro card">
                        <h4>Text-Based Adventure Game</h4><br/>
                        <p>Built in Java. A classic game genre where all the interaction are taken places on screen and the user commands are based on text input such as "user pickup axe". These are also known as Interactive Ficton</p>
                        <a href="https://github.com/Jullan2018/Text-BasedAdventureGame" target="_blank" ><FiExternalLink/></a>
                        </div>
                        <div class="pro card">
                        <h4>Clearvision Site</h4><br/>
                        <p>Designed with WordPress. As a team of computer science student of Auckland Univesity of Technology (AUT)<br/> We were given a project to design a new site for a organisation called Clearvison, a civil contractor business in Auckland, New Zealand </p>
                        <a href="https://clearvision.co.nz/" target="_blank" ><FiExternalLink/></a>
                        </div>
                        <div class="pro card">
                        <h4>Project 4</h4>
                        </div>
                        <div class="pro card">
                        <h4>Project 5</h4>
                        </div>
                        <div class="pro card">
                        <h4>Project 6</h4>
                        </div>
            </div>
        </div>
    </div>
    {/*Contact Section*/}
    <div id="contact">
        <div class="container-4">
            <div class="contact-heading">
        <h2>Contact me</h2>
            <div class="contact-subheading">
                <p>If you want to contact me..Feel free to email me or contact me via phone</p>
                </div>
            </div>
            <div class="info">
            <div class="contactinfo1">
            <a href="mailto:jullan.quevedo50@gmail.com" style={{fontSize:"18px"}}>jullan.quevedo50@gmail.com</a>
            </div>
            <div class="contactinfo2">
            <a style={{fontSize:"18px"}}>+64 22 125 7229</a>
            </div>
            </div>
        </div>
    </div>
    <div class="footer">
            <h3>Copyright @ 2022. Jullan Quevedo</h3>
    </div>
    </>
    )
    }
}