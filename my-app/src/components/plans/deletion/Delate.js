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
    setIsLoading(true);
    fetch("https://api-gym-tracker.azurewebsites.net/plansapi/deleteplanname/"+id,
        { method: "DELETE",
        headers:
            {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
        }})
    .then((response) => {
    setIsLoading(false);
    return response.json();
    })
    .then(response=> {console.log(response);
    }
    );
    },[]);
    if (isLoading){
    return (
        <section>
            <p> is loading..</p>
        </section>);
    };
    props.onDelete();
    props.ReloadOnDelete();

}

export default Delete;