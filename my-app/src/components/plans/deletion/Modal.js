import React from 'react';
import ReactDOM from 'react-dom';
import Delete from './Delate';
import {useState} from "react";
import classes from './Modal.module.css';
function Modal(props) {
    function cancellButtonPressed() {
    props.onClick();
    }
const [DeleteRequest,SetDeleteRequest]=useState(false);
    function handleDelete(props){
    SetDeleteRequest(true);
    return <h1>Deleted succesfully</h1>
    }
return (
    <div className={classes.Modal}>
        <p> Are you sure?</p>
        <button className={classes.cancellbutton} onClick={props.onClick}>cancel</button>
        <button className={classes.deletebutton} onClick={handleDelete} >confirm</button>
        {DeleteRequest && <Delete id={props.id} onDelete={props.onDelete} ReloadOnDelete={props.ReloadOnDelete}/>}
    </div>
);

}

export default Modal;