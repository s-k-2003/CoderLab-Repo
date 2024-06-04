import React, { useEffect, useState } from "react";


import axios from 'axios';

import '../../assets/stylings/TextEditor.css';
import { useNavigate } from "react-router-dom";

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/theme-cobalt';
import 'ace-builds/src-noconflict/theme-github';

import profileimg from '../../assets/images/Profile.jpeg';

const TestEditor = ()=>{
    const nav = useNavigate();
    const [code, setCode] = useState(''); 
    const [mode, setMode] = useState('');
    const [cancode, setCanCode] = useState(false);
    const [output, setOutput] = useState('');
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);
    const [coderun, setCodeRun] = useState(false);
    const [submitcode, setSubmitCode] = useState(false);
    

  const handleChange = (newValue) => {
    setCode(newValue);
  };

//   const handleMode = (m)=>{
//     setCanCode(true);
//     setMode(m);
//     setCode('');
//     console.log(mode);
//  }

const questions =[
    {
        input1:5,
        input2:"1 2 3 4 5",
        output: 9

    },
   
];


const [currlang, setCurrlang] = useState(mode);

const handleRun = async (m) => {
    let selectedLang = m;
    if (m === 'python') {
        selectedLang = 'python3';
    } else if (m === 'c_cpp') {
        selectedLang = 'cpp';
    } else if (m === 'csharp') {
        selectedLang = 'c';
    }
    if(!coderun){
        setCodeRun(true);
        setSubmitCode(true);
    }
    await fetchData(selectedLang);
};
const handleSubmitCode = async (m) => {
    let selectedLang = m;
    if (m === 'python') {
        selectedLang = 'python3';
    } else if (m === 'c_cpp') {
        selectedLang = 'cpp';
    } else if (m === 'csharp') {
        selectedLang = 'c';
    }
    if(!submitcode && !coderun){
        setCodeRun(true);
        setSubmitCode(true);
    }

    await fetchData(selectedLang);
};


const fetchData = async (selected) => {
  

    const options = {
        method: 'POST',
        url: 'https://online-code-compiler.p.rapidapi.com/v1/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '6490a72825msh04daf41461e2642p1c8089jsne58e3fae2e50',
            'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
        },
        data: {
            language: selected,
            version: 'latest',
            code: `${code};`,
            input: 10
        }
    };

    try {
        const response = await axios.request(options);
        setOutput(response.data.output);
    } catch (error) {
        setOutput(error.response.data.output);
    }
};

useEffect(() => {
    setCurrlang(mode);
}, [mode]);
  

useEffect(() => {
    let timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(timer);
          alert('Time is up!');
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);


  


    return(
        <>
           <nav className="nav_bar">
            <div className="nav-logo">
                <i className='bx bx-area nav-logo-icon'></i>
                <h2 className="nav-logo-title" onClick={()=>nav('/')}>CoderLab</h2>
            </div>
            <div className="nav-links">
                <ul className="nav-list">
                    <li><a href="" className="nav-link" onClick={()=>nav('/report')}>Report</a></li>
                    <li><a href="" className="nav-link sign-btn">Submit Test</a></li>
                    <li>
                        <a href="#" className="nav-link profile-box">
                            <img src={profileimg} alt="hello" className="profile-img" />
                        </a>
                    </li>
                </ul>
            </div>
            </nav>
            <div className="testeditor-body">
                <section className="section-container margin-70">
                    <div className="testeditor-container">
                        <div className="testeditor-left">
                            <div className="testeditor-heading mb40">
                                <p className="testeditor-testname">Batch-01 <span className="test-sep">/</span> </p>
                                <h5 className="testname">Test001</h5>
                            </div>

                            <div className="testeditor-question-container">
                                <h2 className="testeditor-question-title mb20">Max Sum Pair</h2>
                                <p className="testeditor-concept mb20">Arrays</p>
                                <p className="testeditor-question-brief mb40">
                                    Write a code to print the maximum sum pair of the given array.
                                </p>
                                <h3 className="testeditor-instruction-title mb20">Instructions</h3>
                                <ul className="testeditor-instructions mb20">
                                    <li className="testeditor-instruction mb20">Input consists n integers in Line 1</li>
                                    <li className="testeditor-instruction mb20">Following that there are n integers in Line 2</li>
                                    <li className="testeditor-instruction mb20">Output conists maximum sum of the given array</li>
                                </ul>
                                <h3 className="testeditor-sampleinput-title mb20">Sample Input</h3>
                                <div className="testeditor-input-container mb30">
                                    <p className="testeditor-input mb10">5</p>
                                    <p className="testeditor-input mb10">1 2 3 4 5</p>
                                </div>
                                <h3 className="testeditor-sampleoutput-title mb20">Sample Output</h3>
                                <div className="testeditor-output-container mb30">
                                    <p className="testeditor-output mb10">9</p>
                                </div>

                                <h3 className="testeditor-output-title mb10">Output</h3>
                                <textarea name="output-area" id="out-area" cols="30" rows="10" className="testeditor-program-output" placeholder="Your Output" value={output}></textarea>
                            </div>
                        </div>

                        <div className="testeditor-right">
                            <div className="testeditor-right-nav">
                                <h3 className="testeditor-duration">Duration :  <span className="texteditor-countdown">{minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}</span></h3>
                                <div className="testeditor-nav-secondary mb20">
                                    <div className="testeditor-languages-list">
                                        <select className="testeditor-languages-choosen" 
                                            onChange={(e) => {
                                                setMode(e.target.value);
                                                setCanCode(true)
                                                setCode('');
                                            }}
                                        >
                                            <option value = '' disabled selected className="testeditor-language">Languages</option>
                                            <option value="python" className="testeditor-language">Python</option>
                                            <option value="java" className="testeditor-language">Java</option>
                                            <option value="c_cpp" className="testeditor-language">C++</option>
                                            <option value="csharp" className="testeditor-language">C</option>
                                        </select>
                                    </div>
                                    <button type="button" className="testeditor-submit run-code" onClick={()=>handleRun(mode)} disabled={!cancode && !coderun}><i className='bx bx-play'/> Run Code</button>
                                    <button type="button" className="testeditor-submit" onClick={()=>handleSubmitCode(mode)} disabled={!cancode || !submitcode}>Submit Code</button>
                                </div>
                            </div>

                            <div className="testeditor-editorarea margin-30 mb30">
                                <h3 className="testeditor-program-title mb20">Program</h3>
                                
                                <AceEditor
                                mode={mode}
                                theme="github_dark"
                                name="pg-area" 
                                editorProps={{ $blockScrolling: true }} 
                                value={code} 
                                onChange={handleChange} 
                                readOnly={!cancode}
                                className={cancode === true ? 'enabled-editor': 'disabled-editor' }
                                style={{
                                    width: '100%',
                                    fontWeight: 550,
                                    borderRadius: 10,
                                    fontSize: 14,
                                    border: '1px solid #ffffff',
                                }}
                                />
                                
                            </div>
                            <div className="testeditor-testcases-container margin-30">
                                <h3 className="testeditor-testcases-title mb20">TestCases Result</h3>
                                <div className="testeditor-testcase-box mb20">
                                    <div className="testeditor-testcase-box-container">
                                        <h4 className="testeditor-testcase-title mb10">TestCase 1</h4>
                                        <p className="testeditor-result-check">Result : <span className="testeditor-result passed">Passed</span></p>
                                    </div>
                                    <div className="testeditor-testcase-icon passed">
                                        <i className='bx bx-check'></i>
                                    </div>
                                </div>
                                <div className="testeditor-testcase-box mb20">
                                    <div className="testeditor-testcase-box-container">
                                        <h4 className="testeditor-testcase-title mb10">TestCase 2</h4>
                                        <p className="testeditor-result-check">Result : <span className="testeditor-result failed">Failed</span></p>
                                    </div>
                                    <div className="testeditor-testcase-icon failed">
                                        <i className='bx bx-x' ></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}

export default TestEditor;