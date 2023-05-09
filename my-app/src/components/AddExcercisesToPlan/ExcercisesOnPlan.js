import Card from "../UI/card";
import {useState} from "react";
import Delete from './Delete';
import classes from './AddExcercisesToPlan.module.css';
import {RiDeleteBin6Line} from 'react-icons/ri';
function ExcercisesOnPlan(props) {
const [DeleteRequest,SetDeleteRequest]=useState(false);
    function handleDelete(props){
    SetDeleteRequest(true);
    return <h1>Deleted succesfully</h1>
    }
    function SuccesFlag(){
    SetDeleteRequest(false);
    }
    function showExcercise() {
        props.idsetter(props.excerciseid);
        props.opener();
    }
    function closeExcercise() {
        props.closer();
    }
return (<tr>
                <th className={classes.tableCol}> <p>{props.name}</p></th>
                <th className={classes.tableCol}><p> </p> </th>
                <th className={classes.tableCol}> <button className={classes.DeleteButton} id={props.id} onClick={handleDelete}> <RiDeleteBin6Line/> </button> </th>
                <th className={classes.tableCol}> <button className={classes.ActionButton} id={props.id} onClick={showExcercise}> show excercise</button> </th>
                {DeleteRequest && <Delete id={props.id} onDelete={props.onDelete} SuccesFlag={SuccesFlag} ReloadOnDelete={props.ReloadOnDelete}/>}

        </tr>);
}
export default ExcercisesOnPlan;