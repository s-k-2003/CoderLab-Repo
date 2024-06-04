import React, { useState } from "react";

import '../../assets/stylings/TestPage.css';
import { useNavigate } from "react-router-dom";

import profileimg from '../../assets/images/Profile.jpeg';
import Popup from "./Popup";
const Tests = ()=>{
    const nav = useNavigate();

    const [popup, setPopup] = useState(false);

    const handlePopup=()=>{
        if(popup){
            setPopup(false);
        }else{
            setPopup(true);
        }
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
                    <li><a href=""  className="nav-link new-test-btn">Create</a></li>
                    <li><a href="" className="nav-link">Help ?</a></li>
                    <li>
                        <a href="#" className="nav-link profile-box">
                            <img src={profileimg} alt="hello" className="profile-img" />
                        </a>
                    </li>
                </ul>
            </div>
            </nav>
            <div className="test-body">
            
            <section className="section-container margin90">
                    <div className="test-nav-container mb30">
                        <h2 className="test-heading">Tests</h2>
                        <a href="#" className="test-filter-btn" onClick={()=>handlePopup()}>
                            <i className='bx bx-filter' ></i>
                        </a>
                    </div>
                    <div className={popup ? "test-lists-container display-hide": "test-lists-container display-show"}>
                            <ul className="test-lists">
                                <li className="test-list mb-20">
                                    <div className="test-contents">
                                        <div className="test-details">
                                        <span className="test-icon">
                                            <i className='bx bx-file' ></i>
                                        </span>
                                        <div className="test-name-details">
                                                <h4 className="test-name-heading">Python For Batch_001</h4>
                                                <p className="test-duration-title">Duration : <span className="duration">60 mins</span> , Max.Marks: <span className="maxmarks">100</span></p>
                                        </div>
                                        </div>
                                        <button type="button" className="take-test-btn" onClick={()=>nav('/testportal')}>Take Test</button>
                                    </div>
                                </li>

                                <li className="test-list mb-20">
                                    <div className="test-contents">
                                        <div className="test-details">
                                            <span className="test-icon">
                                                <i className='bx bx-file' ></i>
                                            </span> 
                                        <div className="test-name-details">
                                                <h4 className="test-name-heading">Java For Batch_001</h4>
                                                <p className="test-duration-title">Duration : <span className="duration">60 mins</span> , Max.Marks: <span className="maxmarks">100</span></p>
                                        </div>
                                        </div>
                                        <button type="button" className="take-test-btn" onClick={()=>nav('/testportal')}>Take Test</button>
                                    </div>
                                </li>

                                <li className="test-list mb-20">
                                    <div className="test-contents">
                                        <div className="test-details">
                                            <span className="test-icon">
                                                <i className='bx bx-file' ></i>
                                            </span> 
                                        <div className="test-name-details">
                                                <h4 className="test-name-heading">C++ For Batch_001</h4>
                                                <p className="test-duration-title">Duration : <span className="duration">60 mins</span> , Max.Marks: <span className="maxmarks">100</span></p>
                                        </div>
                                        </div>
                                        <button type="button" className="take-test-btn" onClick={()=>nav('/testportal')}>Take Test</button>
                                    </div>
                                </li>

                                <li className="test-list mb-20">
                                    <div className="test-contents">
                                        <div className="test-details">
                                            <span className="test-icon">
                                                <i className='bx bx-file' ></i>
                                            </span> 
                                        <div className="test-name-details">
                                                <h4 className="test-name-heading">C For Batch_001</h4>
                                                <p className="test-duration-title">Duration : <span className="duration">60 mins</span> , Max.Marks: <span className="maxmarks">100</span></p>
                                        </div>
                                        </div>
                                        <button type="button" className="take-test-btn" onClick={()=>nav('/testportal')}>Take Test</button>
                                    </div>
                                </li>

                                <li className="test-list mb-20">
                                    <div className="test-contents">
                                        <div className="test-details">
                                            <span className="test-icon">
                                                <i className='bx bx-file' ></i>
                                            </span> 
                                        <div className="test-name-details">
                                                <h4 className="test-name-heading">Final Exam Batch_001</h4>
                                                <p className="test-duration-title">Duration : <span className="duration">60 mins</span> , Max.Marks: <span className="maxmarks">100</span></p>
                                        </div>
                                        </div>
                                        <button type="button" className="take-test-btn" onClick={()=>nav('/testportal')}>Take Test</button>
                                    </div>
                                </li>
                            </ul>
                    </div>
                    <div className={popup ? "test-filter-options margin-70 display-show": "test-filter-options margin-70 display-hide"}>
                    <h2 className="filter-heading mb20">Filter</h2>
                    <div className="filter-list-container mb40">
                        <ul className="filter-lists">
                            <li className="filter-list">
                                <select className="filters">
                                    <option value="" disabled selected className="filter-option-heading">Language</option>
                                    <option value="option1" className="filter-option-heading">Option 1</option>
                                    <option value="option2" className="filter-option-heading">Option 2</option>
                                    <option value="option3" className="filter-option-heading">Option 3</option>
                                </select>
                                <div class="custom-arrow"></div>
                            </li>
                            <li className="filter-list">
                                <select className="filters">
                                    <option value="" disabled selected className="filter-option-heading">Difficulity</option>
                                    <option value="option1" className="filter-option-heading">Option 1</option>
                                    <option value="option2" className="filter-option-heading">Option 2</option>
                                    <option value="option3" className="filter-option-heading">Option 3</option>
                                </select>
                                <div class="custom-arrow"></div>
                            </li>
                            <li className="filter-list">
                                <select className="filters">
                                    <option value="" disabled selected className="filter-option-heading">Topic</option>
                                    <option value="option1" className="filter-option-heading">Option 1</option>
                                    <option value="option2" className="filter-option-heading">Option 2</option>
                                    <option value="option3" className="filter-option-heading">Option 3</option>
                                </select>
                                <div class="custom-arrow"></div>
                            </li>
                            <li className="filter-list">
                                <select className="filters">
                                    <option value="" disabled selected className="filter-option-heading">Duration</option>
                                    <option value="option1" className="filter-option-heading">Option 1</option>
                                    <option value="option2" className="filter-option-heading">Option 2</option>
                                    <option value="option3" className="filter-option-heading">Option 3</option>
                                </select>
                                <div class="custom-arrow"></div>
                            </li>
                            <li className="filter-list">
                                <select className="filters">
                                    <option value="StartDate" disabled selected className="filter-option-heading">Start Date</option>
                                    <option value="option1" className="filter-option-heading">Option 1</option>
                                    <option value="option2" className="filter-option-heading">Option 2</option>
                                    <option value="option3" className="filter-option-heading">Option 3</option>
                                </select>
                                <div class="custom-arrow"></div>
                            </li>
                        </ul>
                    </div>

                    <div className="test-search-container mb80">
                        <h2 className="test-search-heading mb40">Coding Tests</h2>
                        <div className="test-content">
                            <div className="test-search-input mb40">
                                <i className="bx bx-search test-search"></i>
                                <input type="text" placeholder="Search Test" className="seach-input-box" />
                            </div>
                            <div className="test-language-filter-container">
                                <div className="language-filter-lists">
                                    <li className="language-link">
                                        <a href="" className="list-link">Python</a>
                                    </li>
                                    <li className="language-link">
                                        <a href="" className="list-link">Java</a>
                                    </li>
                                    <li className="language-link">
                                        <a href="" className="list-link">C++</a>
                                    </li>
                                    <li className="language-link">
                                        <a href="" className="list-link">C</a>
                                    </li>
                                    <li className="language-link">
                                        <a href="" className="list-link">JavaScript</a>
                                    </li>
                                    <li className="language-link">
                                        <a href="" className="list-link">C#</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="test-buttons fl-left">
                        <div className="reset-button test-btn">Reset</div>
                        <div className="apply-button test-btn" onClick={()=>handlePopup()}>Apply</div>
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

export default Tests;