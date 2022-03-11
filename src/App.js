import React, { Component } from 'react';
import Home from './components/home.js';
import Nav from './components/nav.js';
import './components/style.scss';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';

export default class App extends Component {
  render() {
    return (
      <>
       <Nav/>
       <div class="socialmedia">
        <a href="https://www.linkedin.com/in/jullanq/" target="_blank" class='LinkedinIcon'><FaLinkedin size="50"/></a>
        <a href="https://github.com/Jullan2018" target="_blank" className='GithubIcon' ><FaGithubSquare  size="50"/></a>
        </div>  
        <Home/>
      </>
    )
  }
}