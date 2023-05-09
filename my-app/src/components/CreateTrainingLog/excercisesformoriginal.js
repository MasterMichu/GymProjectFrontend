import {useState} from 'react';
function ExcercisesForm(props) {

function InputFields(props) {
const [inputFields, setInputFields] = useState([
    { excercise: "dummy",reps: '', weight: ''}]);
    const addFields = () =>
    {
        let newfield = { name: '', age: '' };
        setInputFields([...inputFields, newfield]);
    }


    const handleFormChange = (index, event) =>
    {
        let data= [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
const submit = (e) =>
    {
        e.preventDefault();
        console.log(inputFields);
    }
return (
    <div>
        <h4>excercisename</h4>
        <form onSubmit={submit}>

            {inputFields.map((input,index)=>{
            return(
                <div key={index}>
                <input placeholder="reps" type="integer" required id="reps" value={input.reps} onChange={event => handleFormChange(index, event)}/>
                <input placeholder="weight" type="integer" required id="weight" value={input.weight} onChange={event => handleFormChange(index, event)}/>
                <input type="hidden" required id="excercise" value={input.excercise} onChange={event => handleFormChange(index, event)}/>
                </div>)
            })}

        <label htmlFor="date">Training Date</label>
        <input type="date" required id="date" />
        <button onClick={submit}>Submit</button>
        </form>
    </div>
    );
}
const excercisesInputFields = props.excercises.map((excercise) => [excercise.excercise , excercise.id]);
console.log(excercisesInputFields);
    return(
        <InputFields excercises={props.excercises}/>
    );
    }
export default ExcercisesForm;