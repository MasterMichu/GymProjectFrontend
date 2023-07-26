import React from 'react';
import ReactDOM from 'react-dom';
import Card from "../UI/card";
import Modal from "./deletion/Modal";
import Backdrop from "./deletion/Backdrop";
import {useState} from "react";
import classes from './PlanItem.module.css';
import {AiOutlineEye} from 'react-icons/ai';
import {VscTools, VscRecord} from 'react-icons/vsc';
import {RiDeleteBin6Line} from 'react-icons/ri';
function PlanItem(props) {
    const [ShowModal,SetShowModal]=useState(false);
    const [RedirectToModifyExcercises,SetRedirectToModifyExcercises]=useState(false);
    const [RedirectToPreviewExcercises,SetRedirectToPreviewExcercises]=useState(false);
    const [RedirectToRecordResults,SetRedirectToRecordResult]=useState(false);
    function RunRedirectToRecordResults() {
    SetRedirectToRecordResult(true);
    }
    function RunRedirectToModifyExcercises(id){

    SetRedirectToModifyExcercises(true);
    }
    function showModal() {
    SetShowModal(true);
    }
    function closeModal() {
    SetShowModal(false);
    }
    function RunRedirectToPreviewExcercisesOnPlan(){
    SetRedirectToPreviewExcercises(true);}
    function Redirect(props){
    window.location.replace(`/AddExcercises/${props.planid}`);
    }
    function RedirectToPreview(props){
    window.location.replace(`/previewexcercisesonplan/${props.planid}`);
    }
    function RedirectToRecordResultsRun(props){
    window.location.replace(`/recordresults/${props.planid}`);
    }

return (<li>
            <Card>
                <div >
                 <p className={classes.inlineheader}>{props.name} </p>
                 <button className={classes.actionbutton} id={props.id} onClick={RunRedirectToPreviewExcercisesOnPlan}><AiOutlineEye/> Preview </button> 
                 <button className={classes.actionbutton} id={props.id} onClick={RunRedirectToModifyExcercises}> <VscTools/> Modify </button> 
                 <button className={classes.actionbutton} id={props.id} onClick={RunRedirectToRecordResults}>Add new training</button> 
                 <button className={classes.deletebutton} id={props.id} onClick={showModal}> <RiDeleteBin6Line/> Delete</button>
                </div>
                {RedirectToModifyExcercises && <Redirect planid={props.id} />}
                {RedirectToPreviewExcercises && <RedirectToPreview planid={props.id}/>}
                {RedirectToRecordResults && <RedirectToRecordResultsRun planid={props.id}/>}
                <div>
                
                </div>
            </Card>
{ShowModal && <div className={classes.kontener}><Modal id={props.id} onDelete={closeModal} onClick={closeModal} ReloadOnDelete={props.ReloadOnDelete}/>
                <div className={classes.deletionbox}>
                    <Backdrop onClick={closeModal}  />
                </div></div>}

        </li>);
}
export default PlanItem;