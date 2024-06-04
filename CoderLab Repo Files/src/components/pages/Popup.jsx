import React from "react";

const Popup = ()=>{
    return(
        <>
            <div className="test-filter-options margin-70">
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
                        <div className="apply-button test-btn">Apply</div>
                    </div>
                </div>
        </>
    );
}

export default Popup;