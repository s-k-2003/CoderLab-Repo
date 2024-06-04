import React, { useState } from "react";

import '../../assets/stylings/Form.css';

const Form = ()=>{
    const [show, setShow] = useState('login');

    return(
        <>
        <div className="forms-body">
            <section className="form-section margin70 mb-40">
                <div className={show === 'login' ? "form-section-container display-login-show-page": "form-section-container display-hide-page"}>
                    <h2 className="form-heading mb-30">Welcome back to CoderLab</h2>
                    <p className="form-description mb-40">Your coding journey awaits</p>
                    <div className="form-container margin70 mb-10">
                        <div className="forms-list mb-20">
                            <label htmlFor="email" className="form-label">Email</label>
                            <div className="mb-10"></div>
                            <div class="form-wrapper">
                                <i className="bx bx-envelope form-icon"></i>
                                <input type="email" className="form-input" placeholder="Enter your Email"/>
                            </div>
                        </div>
                        <div className="forms-list mb-20">
                            <label htmlFor="email" className="form-label">Password</label>
                            <div className="mb-10"></div>
                            <div class="form-wrapper">
                                <i className="bx bx-lock form-icon"></i>
                                <input type="password" className="form-input" placeholder="Enter your Password"/>
                            </div>
                        </div>
                    </div>
                    <div className="login-btns-section margin70 mb-30">
                        <a href="#" className="forgot-password mb-20">Lost Password?</a>
                        <button type="button" className="login-btn mb-20">Login</button>
                        <p className="signup-title mb-20">Don't have an account?</p>
                        <button type="button" className="signup-btn mb-20" onClick={()=>setShow('signup')}>Sign Up</button>
                    </div>
                </div>
                <div className={show === 'signup' ? "form-section-container display-signup-show-page" : "form-section-container display-hide-page"}>
                    <h2 className="signup-heading mb-30">Create an account</h2>
                    <div className="form-container mb-10">
                        <div className="form-list mb-20">
                            <div className="mb-10"></div>
                            <div class="form-wrapper">
                                <input type="text" className="form-input signup-form mb-20" placeholder="Username"/>
                            </div>
                            <p className="password-description margin20">This will be your display name.</p>
                        </div>
                        <div className="form-list mb-20">
                            <div className="mb-10"></div>
                            <div class="form-wrapper">
                                <input type="email" className="form-input signup-form mb-20" placeholder="Email"/>
                            </div>
                            <p className="password-description margin20">You'll need to confirm your mail.</p>
                        </div>
                        <div className="form-list mb-20">
                            <div className="mb-10"></div>
                            <div class="form-wrapper">
                                <input type="password" className="form-input signup-form mb-20" placeholder="Password"/>
                            </div>
                            <p className="password-description margin20">Use atleast one letter, one numeral, and seven characters.</p>
                        </div>
                        <div className="form-list mb-20">
                            <div className="mb-10"></div>
                            <div class="form-wrapper">
                                <input type="phone" className="form-input signup-form mb-20" placeholder="Mobile"/>
                            </div>
                            <p className="password-description margin20">OTP will be shared to this number.</p>
                        </div>
                    </div>
                    <div className="terms-agree-box mb-20">
                        <input type="checkbox" className="form-agree margin10" id="form-agree"/>
                        <label htmlFor="form-agree" className="form-agree-text">I agree to the CoderLab Terms of Service.</label>
                    </div>
                    <div className="signup-btn-container">
                        <button type="button" className="signup-create-btn mb-20" onClick={()=>setShow('login')}>Create account</button>
                        {/* <span className="divider-line-form-half mb-30"></span>
                        <div className="signup-create-option-btn mb-20">
                            <button type="button" className="google-signup option-btn">Continue with Google</button>
                            <button type="button" className="github-signup-btn option-btn">Continue with Github</button>
                        </div> */}
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

export default Form;