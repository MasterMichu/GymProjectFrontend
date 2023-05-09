function sendObjectsToApi(formdata){
  for (const obj of formdata) {
      fetch("http://127.0.0.1:8000/plansapi/recordresults/", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(obj)
      })
    .then((response) => {
    return response.json();
    })
    .then((data) => {
    window.location.replace('http://localhost:3000/Charts');
}
);
    }
  }

export default sendObjectsToApi;