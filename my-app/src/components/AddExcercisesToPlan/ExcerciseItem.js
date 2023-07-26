import React from 'react';
import ReactDOM from 'react-dom';
import Card from "../UI/card";
import {useState} from "react";
import AddPlanHandler from "./Add";
import classes from './AddExcercisesToPlan.module.css';
import {AiOutlinePlus} from 'react-icons/ai';
import ShowExcerciseDetails from './ShowExcerciseDetails/ShowExcerciseDetails';
import Backdrop from "./ShowExcerciseDetails/Backdrop";

function ExcerciseItem(props) {
const [addreq,setaddreq]=useState(false);
const [showDetails,setshowDetails]=useState(false);
function AddRequest(){
setaddreq(true);
}
function requestSuccess() {
    setaddreq(false);}

function showExcercise() {
    setshowDetails(true);
    props.idsetter(props.id);
    props.opener();
}
function closeExcercise() {
    setshowDetails(false);
    props.closer();
}
return (
<tr className={classes.tableRow}>
                 <th className={classes.tableCol}>{props.name}</th>
                <th className={classes.tableCol}>{props.musclesgroup}</th>
                
                <th className={classes.tableCol}><button className={classes.ActionButton} id={props.id} onClick={AddRequest}> <AiOutlinePlus/>add </button></th>
                 <th className={classes.tableCol}><button className={classes.ActionButton} id={props.id} onClick={showExcercise}> show excercise </button></th>
                {addreq &&  <AddPlanHandler ReloadOnAdd={props.ReloadOnAdd} succesflag={requestSuccess} id={props.id} planid={props.planid} excercise={props.name}/>} 
                
                </tr>
            
        );
}
export default ExcerciseItem;