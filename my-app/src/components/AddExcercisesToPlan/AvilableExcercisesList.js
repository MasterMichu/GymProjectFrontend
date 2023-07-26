import React from 'react';
import ReactDOM from 'react-dom';
import ExcerciseItem from './ExcerciseItem';
import classes from './AddExcercisesToPlan.module.css';
function AvilableExcercisesList(props)
{
return (
<div className={classes.AvilableExcercises}>
<table className={classes.AvilableExcercisesTable}>
<tr className={classes.tableRow}>
        <th> <h3 > Excercises not in my plan </h3> </th>
        </tr>
    <tr>
        <th className={classes.header}> <h3 > Excercise name </h3> </th>
        <th className={classes.header}> <h3> Muscles group </h3> </th>
        <th className={classes.header}> </th>
        <th className={classes.header}>  </th>
    </tr>
{props.excercises.map(excercises => <ExcerciseItem key={excercises.id} id={excercises.id} idsetter={props.idsetter} closer={props.closer} opener={props.opener} name={excercises.name} musclesgroup={excercises.musclesgroup} planid={props.planid} ReloadOnAdd={props.ReloadOnAdd}/>)}
</table>
</div>
);





}
export default AvilableExcercisesList;