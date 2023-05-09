import {useState,useEffect} from "react";
import classes from './ShowExcerciseDetails.module.css';


function ShowExcerciseDetails(props) {
    const [triggerReload,setTriggerReload] = useState(0);
    const [isLoading,setIsLoading]=useState(true);
    const[loadeddetails,setLoadeddetails]=useState([]);
    const id=props.id;
    console.log(id);
    useEffect(()=>{
    setIsLoading(true);
    fetch("http://127.0.0.1:8000/plansapi/excercisedetails/"+id,
        {
        headers:
            {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`
        }})
    .then((response) => {
    return response.json();
    })
    .then((data)=>{
        const excercisedetails=data;
        
        
        console.log(excercisedetails.name);
        setIsLoading(false);
        setLoadeddetails(excercisedetails);





    });
    },[]);
    if (isLoading){
    return (
        <section>
            <p> is loading..</p>
        </section>);
    };
    return(
        <div className={classes.box} onClick={props.close}>
            <table>
            <tr>
                <th>{loadeddetails.name} </th>
                <th>musclegroup </th>
            </tr>
            <tr>
                <th><img height="150" width="200" src={loadeddetails.image}/> </th>
                <th><img height="150" width="200" src={loadeddetails.my_field}/> </th>
            </tr>
            <tr>
                <th colSpan="2"> {loadeddetails.description} </th>
            </tr>
            
            
            </table>
        </div>
);
}




export default ShowExcerciseDetails;