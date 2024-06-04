import React from "react";
import { Routes, Route} from "react-router-dom"
import LandingPage from "./components/pages/LandingPage";
import PracticePage from "./components/pages/Practice";
import Tests from './components/pages/TestPage';
import Editor from './components/pages/PortalEditor';
import TestEditor from "./components/pages/TestEditor";
import Form from "./components/pages/Forms";
import PracticeTest from "./components/pages/PracticeTest";
import Profile from "./components/pages/Profile";
import Report from "./components/pages/Report";

const RouteApp = ()=> {
    return (
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/practice" element={<PracticePage/>}></Route>
        <Route path="/tests" element={<Tests/>}></Route>
        <Route path="/portal" element={<Editor/>}></Route>
        <Route path="/testportal" element={<TestEditor/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/login" element={<Form/>}></Route>
        <Route path="/practicetest" element={<PracticeTest/>}></Route>
        <Route path="/report" element={<Report/>}></Route>
      </Routes>
    )
}

export default RouteApp;