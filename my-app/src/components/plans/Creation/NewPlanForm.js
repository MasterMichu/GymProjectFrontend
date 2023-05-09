import Card from '../../UI/card'
import classes from './NewPlanForm.module.css'
import {useRef} from 'react'
function NewPlanForm(props) {
    const nameRef= useRef();
    function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const PlanData={"name":enteredName};
    console.log(PlanData);
    props.onAddPlan(PlanData);
    }
return (<Card>
<form onSubmit={submitHandler}>
<label htmlFor="name">New Plan Name</label>
<input ref={nameRef} type="text" required id="name"/>
<button type="submit">submit</button>
</form>
</Card>);
}
export default NewPlanForm;