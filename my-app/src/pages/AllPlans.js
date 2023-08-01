import React from 'react';
import ReactDOM from 'react-dom';
import PlanList from "../components/plans/PlanList";
import {useState,useEffect} from "react";
function AllPlans() {
    const [triggerReload,setTriggerReload] = useState(0);
    const [isLoading,setIsLoading]=useState(true);
    const[loadedPlans,setLoadedPlans]=useState([]);
    function ReloadData(){
    setTriggerReload(triggerReload+1);
    }
    useEffect(()=>{
    setIsLoading(true);
    fetch("https://api-gym-tracker.azurewebsites.net/plansapi/plans/",
        {
        headers:
            {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
        }})
    .then((response) => {
    return response.json();
    })
    .then((data)=>{
        const plansarray=[];
        for(const key in data){
        const plan={
        id:key,
        ...data[key]
        };
        plansarray.push(plan);
        };
        console.log(plansarray);
        setIsLoading(false);
        setLoadedPlans(plansarray);
    });
    },[triggerReload]);
    if (isLoading){
    return (
        <section>
            <p> is loading..</p>
        </section>);
    };


  return (<div>
  <PlanList plans={loadedPlans} ReloadOnDelete={ReloadData}/>
  </div>
  );
}

export default AllPlans;