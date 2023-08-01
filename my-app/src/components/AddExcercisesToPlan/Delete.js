import React from 'react';
import ReactDOM from 'react-dom';
import {useState,useEffect} from "react";
import {createContext} from "react";

const listContext = createContext(0);

function Delete(props) {
    const [Updatecounter,SetUpdatecounter]=useState(0);
    const [isLoading,setIsLoading]=useState(true);
    const id=props.id;
    console.log(id);
    useEffect(()=>{
    fetch("https://api-gym-tracker.azurewebsites.net/plansapi/delete/"+id,
        { method: "DELETE",
        headers:
            {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
        }})
    .then((response) => {
    props.SuccesFlag();
    props.ReloadOnDelete();
    return response.json();

    });
    },[]);


}

export default Delete;