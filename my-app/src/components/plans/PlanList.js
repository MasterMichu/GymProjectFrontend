import PlanItem from './PlanItem';
import classes from './liststyle.module.css'
function PlanList(props)
{
return (<ul className={classes.liststyle}>
{props.plans.map(plan => <PlanItem key={plan.id} id={plan.id} name={plan.name} ReloadOnDelete={props.ReloadOnDelete}/>)}
</ul>
);





}
export default PlanList;