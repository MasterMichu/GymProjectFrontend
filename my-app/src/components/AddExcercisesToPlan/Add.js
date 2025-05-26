import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect} from 'react'
function AddPlanHandler(props) {
    useEffect(() => {const adderData={"planname":props.planid,"excercise":props.excercise,"owner":1}
    fetch('http://127.0.0.1:8000/plansapi/addplan/',
    {method: 'POST',
    body: JSON.stringify(adderData),
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
    props.succesflag();
    props.ReloadOnAdd();
}
);},[])

}
export default AddPlanHandler;