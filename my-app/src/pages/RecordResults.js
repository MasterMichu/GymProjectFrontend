import React from 'react';
import ReactDOM from 'react-dom';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from "react";
import ExcercisesForm from "../components/CreateTrainingLog/excercisesform"
function RecordResults() {
    let {id} = useParams();
    console.log(id);
    const [triggerReload,setTriggerReload] = useState(0);
    const [isLoading,setIsLoading]=useState(true);
    const[loadedExcercisesOnPlan,setLoadedExcercisesOnPlan]=useState([]);
    function ReloadData(){
    setTriggerReload(triggerReload+1);
    }

    useEffect(()=>{
    setIsLoading(true);
    fetch("http://127.0.0.1:8000/plansapi/previewexercisesonplan/"+id,
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
        const excercisesarray=[];
        for(const key in data){
        const excercise={
        id:key,
        ...data[key]
        };
        excercisesarray.push(excercise);
        };
        console.log(excercisesarray);
        setIsLoading(false);
        setLoadedExcercisesOnPlan(excercisesarray);
    });
    },[triggerReload]);
    if (isLoading){
    return (
        <section>
            <p> is loading..</p>
        </section>);
    };
return <ExcercisesForm excercises={loadedExcercisesOnPlan}/>;
}
export default RecordResults;