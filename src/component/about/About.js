import React from 'react'
import './About.css'
import image from '../assets/pic.jpg'
import image1 from '../assets/pica.jpg'
import Typical from 'react-typical'
import {FiGithub} from "react-icons/fi";

export default function About(){
    return(
        <>
        <div className="a-about">
            <div className="c-about">
                <p className='a-abou'>
                    About
                </p>
            </div>
            <div className="a-left">
                <span className="a-box">
                    <div className="a">
                        <div className="a-i-left">
                           <img src={image} className="im-box" alt="profile" />
                        </div>
                        <div className="a-ii-right">
                        I completed my High School from Salempur with <b>89.2% </b>and  intermediate with <b>87%.</b>
                        Currently,I persuing my engineering from <b>Krishna Engineering College</b>.About my strength, I am a self-motivated, hard-working and optimistic.I have basic knowledge of computer languages like
                        <Typical
                            steps={['    HTML   ', 1000,'    CSS    ' , 1000,' JAVASCRIPT ',1000,'    REACT   ',1000,'REACT-NATIVE',1000,'   PYTHON   ',1000,'C-language',1000,'    JAVA    ',1000]}
                            loop={Infinity} className="design"
                     />
                        
                        </div>
                    </div>
                </span>
            </div>
            <div className="acdemic">
                <div className="i-academics">
                    -I paticipated in <b>Adobe UX Foundation Learning Journey Aligned to SSC NASSCOM UX design Fondation curriculum </b>and won a certificate.<br/><br/>
                    -I participated in <b>E-Commence & Tech Quiz of Flipkart Grid 4.0 - Software Development Challenge organised by Flipkart</b>  and won a certificate.<br /><br/>
                    -I also participated in <b>TechGuru Presentation 2022 </b>and won certificate.<br /><br />
                    -I have some technical skills like, I can operate <b>Windows XP/7/8/10 and Linux POP-OS.</b><br /><br/> <br />
                </div>
            </div>
            <div className="a-right">
                <span className="a-box">
                   <div className="a">
                        <div className="a-ii-left">
                        To work in globally competitive environment on challenging assignments that shall yeild the twin benefits of the job satisfaction and steady-pace professional growth. 
                        </div>
                        <div className="a-i-right">
                            <img src={image1} className="im-box" alt="profile" />
                        </div>
                    </div>
                </span>
            </div>
            <h2 className="project">
                Projects
            </h2>
            <div className="code">
                <div className="i-project">
                  <div className="i-contents">
                    <p className="i-design">
                        Gym-Workout
                    </p>
                    <p className="i-p">This app is all about the gym related things like on the particular day which exercise we should do.</p>
                    <a href="https://github.com/Suraj7280/Gym-workout.git" className="btn btn-primary"><FiGithub /> Git Hub</a>
                  </div>
                </div>
                <div className="i-project">
                  <div className="i-contents">
                    <p className="i-design">
                        Delhi-Tour
                    </p>
                    <p className="i-p">About
                        This app helps people to find famous places in Delhi to Visit.This app contain informations about many famous palces of Delhi.</p>
                        <a href="https://github.com/Suraj7280/Delhi-Tour.git" className="btn btn-primary"><FiGithub /> Git Hub</a>
                  </div>   
                </div>
                <div className="i-project">
                 <div className="i-contents">
                    <p className="i-design">
                        Alastin-the-fighter
                    </p>
                    <p className="i-p">Online multiplayer zombies fighting game.</p>
                    <a href="https://github.com/Suraj7280/alastin-the-fighter.git" className="btn btn-primary"><FiGithub /> Git Hub</a>
                  </div>
                </div>
            </div>
            <div className="code">
                <div className="i-project">
                <div className="i-contents">
                    <p className="i-design">
                        Portfolio
                    </p>
                    <p className="i-p">My Portfolio that reveals about me.This page design by using react.</p>
                    <a href="https://github.com/Suraj7280/portfolio.git" className="btn btn-primary"><FiGithub /> Git Hub</a>
                  </div>
                </div>
                <div className="i-project">
                  <div className="i-contents">
                    <p className="i-design">
                        Engineerg-Chemistry
                    </p>
                    <p className="i-p">This app is all about the education .This app is related to Engineering Chemistry likes notes and previous year paper.</p>
                    <a href="https://github.com/Suraj7280/Engineering-Chemistry.git" className="btn btn-primary"><FiGithub /> Git Hub</a>
                  </div>
                </div>
                <div className="i-project">
                    <p className="i-project1">Comming Soon...</p>
                </div>
            </div>
        </div>
        </>
    );
}