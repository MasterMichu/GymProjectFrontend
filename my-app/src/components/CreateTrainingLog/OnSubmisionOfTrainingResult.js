import React, { useState, useEffect } from 'react';

function SendHandler({ formData, onApiResponse }) {
  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await fetch("https://api-gym-tracker.azurewebsites.net/plansapi/recordresults/", {
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

        // Call the callback function with the API response data
        onApiResponse(data);
      } catch (error) {
        console.error(error);
      }
    };

    sendData();
  }, [formData, onApiResponse]);

  return null;
}

function sendObjectsToApi(formdata, onApiResponsesReceived) {
  // Define a state to track the API responses
  const [apiResponses, setApiResponses] = useState([]);

  // Callback function to store the API response in the state
  const handleApiResponse = (data) => {
    setApiResponses((prevResponses) => [...prevResponses, data]);
  };

  useEffect(() => {
    if (apiResponses.length === formdata.length) {
      // If all API responses are received, call the provided callback function
      onApiResponsesReceived(apiResponses);
    }
  }, [apiResponses, formdata.length]);

  // Render SendHandler for each formdata item
  return (
    <>
      {formdata.map((obj, index) => (
        <SendHandler key={index} data_in={obj} onApiResponse={handleApiResponse} />
      ))}
    </>
  );
}

export default sendObjectsToApi;