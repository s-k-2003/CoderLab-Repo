import React, { useEffect, useState } from "react";
import '../../assets/stylings/Profile.css';

import Chart from 'react-google-charts';

import profileimg from '../../assets/images/LandingPage.png';
import { useNavigate } from "react-router-dom";
const Profile = ()=>{
    const [tabs, setTabs] = useState('overview');
    const [range,setRange] = useState(100);
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
                    <li>
                        <a href="#" className="nav-link profile-box">
                            <img src={profileimg} alt="hello" className="profile-img" />
                        </a>
                    </li>
                    {/* <l1><a href="#" className="nav-link get-started">Get Started</a></l1> */}
                </ul>
            </div>
           </nav>
            <div className="demo-body">
                <section className="section-container">
                    <h2 className="demo-section-title mb-20 margin60">Live with your coding skills</h2>
                    <p className="demo-description mb-40 margin60">Track your coding skills, total count of problems solved daily.</p>

                    <div className="demo-selection-tabs margin60 mb-40">
                        <ul className="selection-tabs mb-20 margin70">
                            <li><a href="#" className="demo-tabs" onClick={()=>setTabs('overview')}>Overview <span className={tabs === 'overview' ? 'demo-line-active left' : ''}></span></a></li>
                            <li><a href="#" className="demo-tabs" onClick={()=>setTabs('info')}>My Info <span className={tabs === 'info' ? 'demo-line-active center' : ''}></span></a></li>
                            <li><a href="#" className="demo-tabs" onClick={()=>setTabs('compare')}>Compare <span className={tabs === 'compare' ? 'demo-line-active right' : ''}></span></a></li>
                        </ul>
                        <span className="demo-selection-line"></span>
                    </div>

                    <div className="demo-overview-boxes-container margin70 mb-40">
                        <div className="demo-overview-box">
                            <span className="demo-count mb10">20</span>
                            <p className="demo-overview-title">Total Problems solved <br/>today</p>
                        </div>

                        <div className="demo-overview-box">
                            <span className="demo-count mb10">60</span>
                            <p className="demo-overview-title">Total Problems solved <br/>this week</p>
                        </div>

                        <div className="demo-overview-box">
                            <span className="demo-count mb10">100</span>
                            <p className="demo-overview-title">Total Problems solved <br/>this month</p>
                        </div>

                        <div className="demo-overview-box">
                            <span className="demo-count mb10">250</span>
                            <p className="demo-overview-title">Total Problems solved <br/>this year</p>
                        </div>
                    </div>
                    
                    <div className="demo-overview-graph-container mb-40">
                        <div className="demo-graph">
                            <Chart
                                width={'100%'}
                                height={'400px'}
                                chartType="LineChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Month', 'Problems (Solved)'],
                                    ['Jan', 600],
                                    ['Feb', 400],
                                    ['March', 1000],
                                    ['Apirl', 700],
                                    ['May', 900],
                                    ['June', 400],
                                    ['July', 1100],
                                    ['Aug', 500],
                                    ['Sep', 800],
                                    ['Oct', 1300],
                                    ['Nov', 100],
                                    ['Dec', 1200],
                                ]}
                                options={{
                                    title: 'Monthly Completion',
                                    curveType: 'function',
                                    legend: { position: 'bottom' },

                                    annotations: {
                                        alwaysVisible: true,
                                        textStyle: {
                                            fontSize: 14,
                                            color: '#5bacdf',
                                            auraOpacity: 0.5,
                                            fontName: 'Arial',
                                        },
                                        points: [
                                            { x: 1, y: 800, annotation: '2020' },
                                            { x: 3, y: 1200, annotation: '2023' },
                                        ],
                                    },
                                    hAxis: {
                                        title: 'Monthly',
                                    },
                                    vAxis: {
                                        title: 'Emission',
                                    },
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />

                        </div>
                    </div>

                    <div className="demo-overview-content-container margin60 mb-40">
                        <h3 className="demo-overview-content-heading mb-40">Your Coding History</h3>
                        <div className="demo-overview-projected-box">
                            <div className="demo-projected-content mb-10">
                                <div className="demo-projected-month">Jan</div>
                                <div className="demo-projected-values">600 Solved</div>
                            </div>
                            <div className="demo-projected-content mb-10">
                                <div className="demo-projected-month">Feb</div>
                                <div className="demo-projected-values">400 Solved</div>
                            </div>
                            <div className="demo-projected-content mb-10">
                                <div className="demo-projected-month">March</div>
                                <div className="demo-projected-values">1000 Solved</div>
                            </div>
                            <div className="demo-projected-content mb-10">
                                <div className="demo-projected-month">April</div>
                                <div className="demo-projected-values">700 Solved</div>
                            </div>
                        </div>
                    </div>

                    <div className="demo-overview-emission-container mb-30">
                       <div className="demo-overview-content margin60 mb-20">
                            <h3 className="demo-overview-emission-heading">You've completed 60% of your goal</h3>
                            <div className="demo-overview-emission-values">1000 Solved</div>
                       </div>
                       <span className="demo-overview-projected-goal mb-30 margin60">
                            <div className="demo-color-fill"></div>
                       </span>
                       <p className="demo-overview-projected-description margin60">To stay on track, you should earn more batches from various topics and tests.</p>
                    </div>

                    <div className="demo-overview-setgoal-container mb-30">
                        <h3 className="demo-setgoal-heading margin60 mb-20">Set a goal for 2024</h3>
                        <div className="demo-setgoal-content mb-20">
                            <p className="demo-setgoal-description margin50">What is your goal for total Problem Solving in 2024?</p>
                            <input type="range" className="demo-setgoal-range" value={range} onChange={(e)=>setRange(e.target.value)} />
                            <p className="demo-setgoal-values">{range} Problems</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Profile;