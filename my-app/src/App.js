import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Routes,useParams} from "react-router-dom";
import AddPlan from './pages/AddPlan';
import AllPlans from './pages/AllPlans';
import Charts from './pages/Charts';
import RecordResults from './pages/RecordResults';
import PreviewExcercisesOnPlan from './pages/PreviewExcercisesOnPlan';
import RawTrainingLogs from './pages/RawTrainingLogs';
import MainNavigation from "./components/layout/MainNavigation";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Signup from "./components/auth/Signup";
import About from "./components/about/About";
import AddExcercises from "./pages/AddExcercises";
import classes from "./App.module.css";



function App() {
  return<div>
  <MainNavigation />
  
    <Routes>
        <Route path="/" element={< About/>}/>
        <Route path='/AllPlans' element={<AllPlans/>}/>
        <Route path="/AddPlan" element={< AddPlan/>}/>
        <Route path="/charts" element={< Charts/>}/>
        <Route path="/RawTrainingLogs" element={< RawTrainingLogs/>}/>
        <Route path="/About" element={< About/>}/>
        <Route path="/Login" element={< Login/>}/>
        <Route path="/Logout" element={< Logout/>}/>
        <Route path="/Signup" element={< Signup/>}/>
        <Route path="AddExcercises/:id" element={<AddExcercises/>}/>
        <Route path="previewexcercisesonplan/:id" element={<PreviewExcercisesOnPlan/>}/>
        <Route path="recordresults/:id" element={<RecordResults/>}/>
        


    </Routes>
  </div>;
}

export default App;
