import React, { useState } from 'react';
import Card from '../UI/card.js';
import classes from './excercisesform.module.css';

function ExcercisesForm(props) {
  const [formValues, setFormValues] = useState([]);
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponses, setApiResponses] = useState([]);

  const handleInputChange = (e, rowIndex) => {
    const { name, value } = e.target;
    const updatedFormValues = [...formValues];
    updatedFormValues[rowIndex] = { ...updatedFormValues[rowIndex], [name]: value, excercise: props.excercises[rowIndex].excercise };
    setFormValues(updatedFormValues);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleApiResponsesReceived = (response) => {
    setApiResponses((prevResponses) => [...prevResponses, response]);
  };

  const sendObjectToApi = async (formData) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/plansapi/recordresults/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });

      console.log(formData);
      console.log(response);
      const data = await response.json();
      console.log(data);
      handleApiResponsesReceived(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValuesWithDate = formValues.map((row) => ({ ...row, date }));
    console.log('Form Values:', formValuesWithDate);

    try {
      setIsSubmitting(true);
      await Promise.all(formValuesWithDate.map(sendObjectToApi)); // Call API for each formdata item
      setIsSubmitting(false);
      window.location.replace('http://localhost:3001/Charts');
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
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
        <button type="submit" className={classes.actionbutton} disabled={isSubmitting}>
          Submit
        </button>
      </form>
      {isSubmitting && <p>Loading...</p>}
    </Card>
  );
};

export default ExcercisesForm;