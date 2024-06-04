import React, { useState } from "react";

import '../../assets/stylings/Practice.css';

import profileimg from '../../assets/images/Profile.jpeg';
import beginnerimg from '../../assets/images/Beginner.png';
import intermediateimg from '../../assets/images/Intermediate.png';
import advancedimg from '../../assets/images/Advanced.png';
import professionalimg from '../../assets/images/Professional.jpeg';

import { useNavigate } from "react-router-dom";
const PracticePage =()=>{
    const nav = useNavigate();
    const [selected, setSelected] = useState('python');

    const handleSelected =(item)=>{
        setSelected(item);
    }
    return(
        
        <>
            <nav className="nav_bar">
            <div className="nav-logo">
                <i className='bx bx-area nav-logo-icon'></i>
                <h2 className="nav-logo-title" onClick={()=>nav('/')}>CoderLab</h2>
            </div>
            <div className="nav-links">
                <ul className="nav-list">
                    <li><a href="" onClick={()=>nav('/portal')} className="nav-link">Playground</a></li>
                    <li><a href="" onClick={()=>nav('/practice')} className="nav-link">Practice</a></li>
                    <li><a href="" onClick={()=>nav('/tests')} className="nav-link">Tests</a></li>
                    <li><a href="" className="nav-link">Help ?</a></li>
                    <li>
                        <a href="#" className="nav-link profile" onClick={()=>nav('/profile')}>
                            <i className="bx bx-user profile-icon"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link profile-box">
                            <img src={profileimg} alt="hello" className="profile-img" />
                        </a>
                    </li>
                </ul>
            </div>
            </nav>

            <div className="practice-body">

            <section className="section-container">
                <h2 className="learn-heading margin-70 mb20">Start coding with us</h2>
                <p className="learn-subtitle margin-70 mb40">Choose your language</p>

                <div className="languages-container margin-70 mb60">
                    <li className="languages-list">
                        <a href="#" className={selected === 'python' ? "language-name name-active" : "language-name"} onClick={()=>handleSelected('python')}>Python</a>
                        <span className={selected === 'python' ? "language-line line-active" : "language-line"}></span>
                    </li>
                    <li className="languages-list">
                        <a href="#" className={selected === 'java' ? "language-name name-active" : "language-name"} onClick={()=>handleSelected('java')}>Java</a>
                        <span className={selected === 'java' ? "language-line line-active" : "language-line"}></span>
                    </li>
                    <li className="languages-list">
                        <a href="#" className={selected === 'c++' ? "language-name name-active" : "language-name"} onClick={()=>handleSelected('c++')}>C++</a>
                        <span className={selected === 'c++' ? "language-line line-active" : "language-line"}></span>
                    </li>
                    <li className="languages-list">
                        <a href="#" className={selected === 'c' ? "language-name name-active" : "language-name"} onClick={()=>handleSelected('c')}>C</a>
                        <span className={selected === 'c' ? "language-line line-active" : "language-line"}></span>
                    </li>
                    <li className="languages-list">
                        <a href="#" className={selected === 'mysql' ? "language-name name-active" : "language-name"} onClick={()=>handleSelected('mysql')}>Mysql</a>
                        <span className={selected === 'mysql' ? "language-line line-active" : "language-line"}></span>
                    </li>
                </div>

                <div className="language-levels-container margin-70">
                    <div className="language-level" onClick={()=>nav('/practicetest')}>
                        <img src={beginnerimg} alt="" className="level-img" />
                        <h2 className="level-heading">Beginner</h2>
                        <p className="level-subtitle">Learn the basics with our <br/> beginner courses</p>
                    </div>
                    <div className="language-level" onClick={()=>nav('/practicetest')}>
                        <img src={intermediateimg} alt="" className="level-img" />
                        <h2 className="level-heading">Intermediate</h2>
                        <p className="level-subtitle">Master your skills with our <br/> intermediate courses</p>
                    </div>
                    <div className="language-level" onClick={()=>nav('/practicetest')}>
                        <img src={advancedimg} alt="" className="level-img" />
                        <h2 className="level-heading">Advanced</h2>
                        <p className="level-subtitle">Get ready for a carrer in tech <br/> with our advanced courses</p>
                    </div>
                    <div className="language-level" onClick={()=>nav('/practicetest')}>
                        <img src={professionalimg} alt="" className="level-img" />
                        <h2 className="level-heading">Professional</h2>
                        <p className="level-subtitle">Stay ahead of the competition <br/> with our professional courses</p>
                    </div>
                </div>
            </section>

            </div>
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

export default PracticePage;