import React, { useEffect, useState } from "react";

import '../../assets/stylings/PortalEditor.css';
import { useNavigate } from "react-router-dom";
import profileimg from '../../assets/images/Profile.jpeg';

import axios from 'axios';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/theme-cobalt';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-github_dark';


const Editor =()=>{
    const nav = useNavigate();
    const [code, setCode] = useState(""); 
    const [mode, setMode] = useState('python');
    const [lang, setLang] = useState('');
    const [output, setOutput] = useState('');
    const [cancode, setCanCode] = useState(false);
    const [excepted, setExcepted] = useState('');
    const [isError, setIsError] = useState(false);

    const questions =[
        {
            input:'AAbcde',
            output: 2

        },
       
    ];

    useEffect(()=>{
        setExcepted(questions[0].output);
    },[]);

    



    const handleMode = (m)=>{
        setCanCode(true);
        setMode(m);
        setCode('');
        
    }


    const handleRun = async (mode) => {
        let selectedLang = '';
        if (mode === 'python') {
            selectedLang = 'python3';
        }else if(mode === 'c_cpp'){
            selectedLang = 'cpp';
        }else if(mode === 'csharp'){
            selectedLang = 'c';
        }
        else if(mode === 'java'){
            selectedLang = 'java';
        }

        setLang(selectedLang);
        

        const fetchData = async(selected)=>{

            const options = {
                method: 'POST',
                url : 'https://online-code-compiler.p.rapidapi.com/v1/',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': 'fb896bbd22msh4ad99ffbccb19bfp1a72ddjsn62ef4d818f01',
                    'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
                },
                data: {
                    language: selected,
                    version: 'latest',
                    code: `${code};`,
                    input: questions[0].input
                }
            };
            
            try {
                const response = await axios.request(options);
                setOutput(response.data.output);
            } catch (error) {
               console.log(error);
            }       
        }

        if (lang) {
            await fetchData(lang);
        }
    }

    useEffect(()=>{
        if(output.includes("Traceback")){
            setIsError(true);
        }else{
            setIsError(false);
        }
    });
    
    

   

  

    const handleChange = (newValue) => {
        setCode(newValue);
    };

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
                    <li><a href="" className="nav-link help-btn">Help ?</a></li>
                    <li>
                        <a href="#" className="nav-link profile-box">
                            <img src={profileimg} alt="hello" className="profile-img" />
                        </a>
                    </li>
                </ul>
            </div>
            </nav>
            
        </>
    );
}

export default Editor;