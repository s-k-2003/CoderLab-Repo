import React from "react";

import '../../assets/stylings/PracticeTest.css';
import { useNavigate } from "react-router-dom";
import profileimg from '../../assets/images/Profile.jpeg';

const PracticeTest = ()=>{
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
                    <li><a href="" onClick={()=>nav('/')} className="nav-link">Home</a></li>
                    <li><a href="" onClick={()=>nav('/tests')} className="nav-link">Tests</a></li>
                    <li><a href="" className="nav-link">Help ?</a></li>
                    <li>
                        <a href="#" className="nav-link profile-box">
                            <img src={profileimg} alt="hello" className="profile-img" />
                        </a>
                    </li>
                </ul>
            </div>
            </nav>
            <div className="practicetest-body">
                <section className="practice-container margin-70 mb30">
                    <div className="practice-heading-container">
                        <h2 className="section-title mb30">Practice Python</h2>
                        <h3 className="section-secondary-title mb30">Solved : <span className="solved-count">0</span></h3>
                    </div>
                    <div className="practice-list-container">
                        <ul className="practice-lists">
                            <li className="practice-test-list mb30">
                                <div className="test-content">
                                    <span className="practice-test-icon">
                                        <i className="bx bx-file test-icons"></i>
                                    </span>
                                    <h2 className="practice-test-topic-heading">Basics</h2>
                                </div>
                                <button type="button" className="practice-btn">Take Test</button>
                            </li>
                            <li className="practice-test-list mb30">
                                <div className="test-content">
                                    <span className="practice-test-icon">
                                        <i className="bx bx-file test-icons"></i>
                                    </span>
                                    <h2 className="practice-test-topic-heading">Conditions</h2>
                                </div>
                                <button type="button" className="practice-btn">Take Test</button>
                            </li>
                            <li className="practice-test-list mb30">
                                <div className="test-content">
                                    <span className="practice-test-icon">
                                        <i className="bx bx-file test-icons"></i>
                                    </span>
                                    <h2 className="practice-test-topic-heading">Loops</h2>
                                </div>
                                <button type="button" className="practice-btn">Take Test</button>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
           
        </>
    );
}

export default PracticeTest;