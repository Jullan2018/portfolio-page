import React, {Component} from "react";
import {Link} from 'react-scroll';
import '../components/home.scss';
import '../components/about.scss';
import '../components/work.scss';
import '../components/contact.scss';
import headerLogo from '../img/headerlogo.png';
import aboutPhoto from '../img/aboutme.jpg'
import {FiExternalLink} from 'react-icons/fi';
import {FaPhone} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';

export default class Home extends Component {
    render() {
        return (
    <>
    <div class="main-container">
        {/*Home Section*/}
        <section id="home" class="container-1">
                <div class="intro-text">
                        <h2>HELLO I'M</h2>
                            <h2>
                            JULLAN QUEVEDO
                            </h2>
                        <h3>SOFTWARE DEVELOPER</h3>
                        <div class="contact-btn">
                        <Link to="contact" spy={true} smooth={true}>Contact Me</Link>
                    </div>
                    </div>
                
                    <div class="header-logo">
                        <img src={headerLogo} height="600" width="600" alt="JSQ"/>
                    </div>
                    
        </section>
        
        {/*About Section*/}
        <section id="about" class="container-2">
                <div class="about">
                    <h2>About Me</h2><br/>
                <p>A recent Bachelor of Computer Science Graduate ( Major in Software Development) of Auckland of University (AUT) looking for position in frontend or full-stack development </p><br/>
                <p>Knowledge of the Agile/Scrum Framework at an entry level, ability to function within a scrum team and have a basic understanding of the roles that are involved within the framework.  
                Ability to be flexible and adaptable in any work environment, as demonstrated from my past and present work experience.</p><br/>
                <p> Passionate toward the idea of continuously learning, to improve my way of working
                    Skilled in web development at a graduate level, warehouse management system and knowledge in different programming such as C, Java, JavaScript, HTML, CSS and others. </p>
                </div>
                <div class="about-photo">
                    <img src={aboutPhoto} alt="JQ"/>    
                </div>
        </section>
        {/*Work Section*/}
            <section id="work" class="container-3">
                <div class="work-heading">
            <h2>My Work</h2>
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
            </section>
        {/*Contact Section*/}   
        <section id="contact" class="container-4">
            <div class="contact-heading">
                <h2>Contact me</h2>
                </div>
            <div class="contact-subheading">
                <p>If you want to contact me..Feel free to email me or contact me via phone</p>
            </div>
            <div class="info">
            <div class="mail-btn">
            <FaEnvelope size="30"/><a href="mailto:jullan.quevedo50@gmail.com" >jullan.quevedo50@gmail.com</a>
            </div>
            <div class="phone-info">
            <FaPhone size="30"/><a> +64 22 125 7229</a>
            </div>
            </div>
        </section>
        </div>
        <div class="footer">
            <h3>Copyright @ 2022. Jullan Quevedo</h3>
        </div>
    </>
    )
    }
}