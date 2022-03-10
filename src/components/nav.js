import React,{Component} from "react";
import {Link} from 'react-scroll';

export default class Nav extends Component {
    render() {
        return (
        <div class='header-menu'>
        <div class="logo">
        <h1>JQuevedo</h1>
        </div>
            <ul>
                <li>
                    <Link activeClass="active" to="home" spy={true} smooth={true} >Home</Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} >About</Link>
                </li>
                <li>
                     <Link to="work" spy={true} smooth={true}>Work</Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true}>Contact</Link>
                </li>
            </ul>
            </div>   
        )
    }
}