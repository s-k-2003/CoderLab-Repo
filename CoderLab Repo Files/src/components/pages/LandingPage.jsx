import React, { useState } from "react";

import '../../assets/stylings/LandingPage.css';
import 'boxicons/css/boxicons.min.css'

// Images
import landingimage from '../../assets/images/LandingPage.png';
import python from '../../assets/images/Python.jpeg';
import javascript from '../../assets/images/JavaScript.png';
import html from '../../assets/images/html_css.jpeg';
import mysql from '../../assets/images/mysql.png';
import java from '../../assets/images/java.png';
import cplus from '../../assets/images/c++.png';
import loops from '../../assets/images/Loops.jpg';
import arrays from '../../assets/images/Arrays.jpeg';
import conditions from '../../assets/images/Conditions.png';
import functions from '../../assets/images/functions.png';
import strings from '../../assets/images/Strings.jpeg';
import { useNavigate } from "react-router-dom";


const LandingPage =()=>{
    const nav = useNavigate();

    
    return(
        <>
           <nav className="nav_bar">
            <div className="nav-logo">
                <i className='bx bx-area nav-logo-icon'></i>
                <h2 className="nav-logo-title" onClick={()=>nav('/')}>CoderLab</h2>
            </div>
            <div className="nav-links">
                <ul className="nav-list">
                    <li><a href=""  onClick={()=>nav('/portal')} className="nav-link">Playground</a></li>
                    <li><a href="" onClick={()=>nav('/practice')} className="nav-link">Practice</a></li>
                    <li><a href=""  onClick={()=>nav('/tests')} className="nav-link">Tests</a></li>
                    <li><a href="#" className="nav-link">Help ?</a></li>
                    <li><a href="" className="nav-link sign-btn" onClick={()=>nav('/login')}>Sign In</a></li>
                    {/* <l1><a href="#" className="nav-link get-started">Get Started</a></l1> */}
                </ul>
            </div>
           </nav>

           <section className="section-container">
                <div className="banner">
                    <img src={landingimage} alt="banner-img" className="banner-img" />
                    <div className="banner-content">
                        <h2 className="banner-text">Level up your coding skills</h2>
                        <p className="banner-description">CoderLab is the best place to learn programming. We offer free, high-quality lessons, <br/>coding challenges, and community support.</p>
                        <div className="banner-search-box">
                            <i className="bx bx-search banner-search"></i>
                            <input type="text" className="banner-input" placeholder="Search for a language or topics"/>
                            <a href="#" className="btn">Search</a>
                        </div>
                    </div>
                </div>
           </section>

           <section className="section-container">
                <h2 className="section-heading">Featured Paths</h2>
                <div className="coding-topics">
                    <div className="topics">
                        <img src={python} alt=""  className="coding-img"/>
                        <h3 className="coding-title">Python</h3>
                    </div>
                    <div className="topics">
                        <img src={javascript} alt=""  className="coding-img"/>
                        <h3 className="coding-title">JavaScript</h3>
                    </div>
                    <div className="topics">
                        <img src={html} alt=""  className="coding-img"/>
                        <h3 className="coding-title">HTML & CSS</h3>
                    </div>
                    <div className="topics">
                        <img src={mysql} alt=""  className="coding-img"/>
                        <h3 className="coding-title">SQL</h3>
                    </div>
                    <div className="topics">
                        <img src={java} alt=""  className="coding-img"/>
                        <h3 className="coding-title">Java</h3>
                    </div>
                    <div className="topics">
                        <img src={cplus} alt=""  className="coding-img"/>
                        <h3 className="coding-title">C++</h3>
                    </div>
                </div>
           </section>
           <section className="section-container">
                <h2 className="section-heading">Our Most Popular Challenges</h2>
                <div className="challenges-topics">
                    <div className="challenge">
                        <img src={loops} alt="" className="challenge-img"/>
                        <h2 className="challenge-heading">Loops</h2>
                    </div>
                    <div className="challenge">
                        <img src={arrays} alt="" className="challenge-img"/>
                        <h2 className="challenge-heading">Arrays</h2>
                    </div>
                    <div className="challenge">
                        <img src={conditions} alt="" className="challenge-img"/>
                        <h2 className="challenge-heading">Conditions</h2>
                    </div>
                    <div className="challenge">
                        <img src={functions} alt="" className="challenge-img"/>
                        <h2 className="challenge-heading">Functions</h2>
                    </div>
                    <div className="challenge">
                        <img src={strings} alt="" className="challenge-img"/>
                        <h2 className="challenge-heading">Strings</h2>
                    </div>
                </div>
           </section>

           <footer className="landing-footer">
                <div className="footer-logo">
                    <i className="bx bx-area footer-icon"></i>
                    <h2 className="footer-logo-title">CoderLab</h2>
                </div>
                <div className="footer-links">
                    <div className="link-col">
                        <p className="link-heading">Heading 1</p>
                        <li><a href="#" className="footer-link">Link 1</a></li>
                        <li><a href="#" className="footer-link">Link 2</a></li>
                        <li><a href="#" className="footer-link">Link 3</a></li>
                        <li><a href="#" className="footer-link">Link 4</a></li>
                    </div>
                    <div className="link-col">
                        <p className="link-heading">Heading 2</p>
                        <li><a href="#" className="footer-link">Link 1</a></li>
                        <li><a href="#" className="footer-link">Link 2</a></li>
                        <li><a href="#" className="footer-link">Link 3</a></li>
                        <li><a href="#" className="footer-link">Link 4</a></li>
                    </div>
                    <div className="link-col">
                        <p className="link-heading">Heading 3</p>
                        <li><a href="#" className="footer-link">Link 1</a></li>
                        <li><a href="#" className="footer-link">Link 2</a></li>
                        <li><a href="#" className="footer-link">Link 3</a></li>
                        <li><a href="#" className="footer-link">Link 4</a></li>
                    </div>
                </div>
                <div className="footer-copyrights">
                    <i class='bx bx-copyright' ></i> All rights reserved
                </div>
           </footer>
        </>
    );
}

export default LandingPage