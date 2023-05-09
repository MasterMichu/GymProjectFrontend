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
  return<div >
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
        <Route path="AddExcercises" >
        <Route path=":id" element={<AddExcercises/>}/>
        </Route>
        <Route path="PreviewExcercisesOnPlan">
        <Route path=":id" element={<PreviewExcercisesOnPlan/>}/>
        </Route>
        <Route path="recordresults">
        <Route path=":id" element={<RecordResults/>}/>
        </Route>


    </Routes>
  </div>;
}

export default App;
