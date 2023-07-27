import ReactDOM from 'react-dom';
import React,{ useState } from 'react';
import sendObjectsToApi from "./OnSubmisionOfTrainingResult.js";
import Card from '../UI/card.js';
import classes from './excercisesform.module.css';


function ExcercisesForm(props) {
  const [formValues, setFormValues] = useState([]);
  const [date, setDate] = useState('');

const handleInputChange = (e, rowIndex) => {
    const { name, value } = e.target;
    const updatedFormValues = [...formValues];
    updatedFormValues[rowIndex] = { ...updatedFormValues[rowIndex], [name]: value, excercise: props.excercises[rowIndex].excercise };
    setFormValues(updatedFormValues);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValuesWithDate = formValues.map((row) => ({ ...row, date }));
    console.log('Form Values:', formValuesWithDate);
    sendObjectsToApi(formValuesWithDate);
    // Perform further actions with form values with date
  }

  return (
    <Card>
    <form onSubmit={handleSubmit} className={classes.form}>
      
      
      <table>
        <thead>
        
        <tr>
          <th colSpan="3" className={classes.date}>
<label className={classes.date}>
        Date:
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
        />
      </label>
      </th>
</tr>

          

        
        </thead>
        <thead>
          <tr> 
            <th className={classes.headers}>Excercise name</th>
            <th className={classes.headers}>Weight</th>
            <th className={classes.headers}>Reps</th>
          </tr>
        </thead>
        <tbody>
          {props.excercises.map((excercise, rowIndex) => (
            <tr className={classes.tablecols} key={excercise.excercise}>
              <td className={classes.tablecols}>{excercise.excercise}</td>
              <td className={classes.tablecols}>
                <input
                  type="text"
                  name="weight"
                  value={formValues[rowIndex]?.weight || ''}
                  onChange={(e) => handleInputChange(e, rowIndex)}
                />
              </td>
              <td className={classes.tablecols}>
                <input
                  type="text"
                  name="reps"
                  value={formValues[rowIndex]?.reps || ''}
                  onChange={(e) => handleInputChange(e, rowIndex)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit" className={classes.actionbutton}>Submit</button>
    </form>
    </Card>
  );
};

export default ExcercisesForm;
