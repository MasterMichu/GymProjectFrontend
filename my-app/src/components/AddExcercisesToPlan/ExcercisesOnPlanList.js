import ExcercisesOnPlan from './ExcercisesOnPlan';
import Card from "../UI/card";
import classes from './AddExcercisesToPlan.module.css';
function ExcercisesOnPlanList(props)
{
return (
    <div className={classes.ExcercisesOnPlanList}>
 
 <table className={classes.MyExcercisesTable} >
 <tr className={classes.tableRow}>
    <th ><h3>Excercises already in my plan </h3></th>    
</tr> 
<tr>
        <th className={classes.header}> <h3 > Excercise name </h3> </th>
        <th className={classes.header}>  </th>
        <th className={classes.header}>  </th>
        <th className={classes.header}> </th>

    </tr> 

{props.excercises.map(excercises => <ExcercisesOnPlan key={excercises.id} id={excercises.id} excerciseid={excercises.my_field} name={excercises.excercise} ReloadOnDelete={props.ReloadOnDelete} idsetter={props.idsetter} closer={props.closer} opener={props.opener}/>)}
</table>
</div>
);





}
export default ExcercisesOnPlanList;