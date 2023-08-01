import React from 'react';
import ReactDOM from 'react-dom';
import {useState,useEffect} from'react';
import NewPlanForm from '../components/plans/Creation/NewPlanForm';
import classes from './AddPlan.module.css';

function AddPlan() {
    const [planid,setplanid]=useState(0);
    const [addednew,setaddednew]=useState(false);
    function Redirect(props){
    window.location.replace(`/AddExcercises/${props.planid}`);
    }
    function AddPlanHandler(PlanData) {
    fetch('https://api-gym-tracker.azurewebsites.net/plansapi/plans/',
    {method: 'POST',
    body: JSON.stringify(PlanData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`
    }
    }
    )
    .then((response) => {
    return response.json();
    })
    .then((data) => {
    const planidtemp=data.id;
    console.log(planid);
    setplanid(planidtemp);
    setaddednew(true);

}
);

}
  if(addednew){
  return <Redirect planid={planid}/>;}
  return (
  
  <section>
  <div className={classes.outerspace}>
  <NewPlanForm onAddPlan={AddPlanHandler}/>
  </div>
  </section>);

}
export default AddPlan;