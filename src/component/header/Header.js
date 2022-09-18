import React 
from 'react'
import './Header.css'

import {FiInstagram} from "react-icons/fi";
import {FiTwitter} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {FiLinkedin} from "react-icons/fi";

export default function Header(){
    return(
        <div className="i-header">
            <div className="h-left">
                <div className="h-nam">
                    <p className="i-h-name">Hy! I Am</p>
                </div>
                <span className="h-name">
                    Suraj Sharma
                </span>
                <div>
                I'm a software developer.I have developed many types of font-end pages.I'm passionate about coding and designing the layouts and i love what i do. 
                </div>
                <button className="i-button">Hire me</button>
            </div>
            <div className="h-right">
            <span className="h-name1">
                <div  className="icons">
                    <a href="https://www.instagram.com/s_raj_sh/"  className="icons1"><FiInstagram /></a>
                    <a href="https://twitter.com/s_raj_sh" className="icons1"><FiTwitter /></a>
                    <a href="https://github.com/Suraj7280" className="icons1"><FiGithub /></a>
                    <a href="https://www.linkedin.com/in/suraj-sharma-2a4aab20b/" className="icons1"><FiLinkedin /></a>
                </div>
            </span>
            
            </div>
        </div>
    );
}