import {useParams} from 'react-router-dom';
import {useState,useEffect} from "react";
import AvilableExcercisesList from "../components/AddExcercisesToPlan/AvilableExcercisesList";
import ExcercisesOnPlanList from "../components/AddExcercisesToPlan/ExcercisesOnPlanList";
import Backdrop from "../components/AddExcercisesToPlan/ShowExcerciseDetails/Backdrop";
import ShowExcerciseDetails from "../components/AddExcercisesToPlan/ShowExcerciseDetails/ShowExcerciseDetails";
import classes from './AddExcercises.module.css';
function AddExcercises() {
    let {id} = useParams();
    console.log(id);
    const [triggerReload,setTriggerReload] = useState(0);
    const [isLoading,setIsLoading]=useState(true);
    const[loadedExcercises,setLoadedExcercises]=useState([]);
    const[loadedExcercisesOnPlan,setLoadedExcercisesOnPlan]=useState([]);
    const [showDetails,setshowDetails]=useState(false);
    const [DetailsId,setDetailsId]=useState(0);
    function ReloadData(){
    setTriggerReload(triggerReload+1);
    }
    useEffect(()=>{
    setIsLoading(true);
    fetch("http://127.0.0.1:8000/plansapi/excercises/",
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
        const excercisesarray=[];
        for(const key in data){
        const excercise={
        id:key,
        ...data[key]
        };
        excercisesarray.push(excercise);
        };
        console.log(excercisesarray);
        setIsLoading(false);
        setLoadedExcercises(excercisesarray);
    });
    },[]);
    useEffect(()=>{
    setIsLoading(true);
    fetch("http://127.0.0.1:8000/plansapi/previewexercisesonplan/"+id,
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
        const excercisesarray=[];
        for(const key in data){
        const excercise={
        id:key,
        ...data[key]
        };
        excercisesarray.push(excercise);
        };
        console.log(excercisesarray);
        setIsLoading(false);
        setLoadedExcercisesOnPlan(excercisesarray);
    });
    },[triggerReload]);
    if (isLoading){
    return (
        <section>
            <p> is loading..</p>
        </section>);
    };
    const filteredArray = loadedExcercises.filter((item1) => {
        return !loadedExcercisesOnPlan.some((item2) => {
          return item2.excercise === item1.name;
        });
      });
    console.log(loadedExcercisesOnPlan);
    console.log(loadedExcercises);
    console.log(filteredArray);

    

    function showExcercise() {
        setshowDetails(true);
    }
    function closeExcercise() {
        setshowDetails(false);
    }
    function showExcerciseID(excerciseid) {
        setDetailsId(excerciseid);
    }


return (<section>
<ExcercisesOnPlanList excercises={loadedExcercisesOnPlan} ReloadOnDelete={ReloadData} idsetter={showExcerciseID} closer={closeExcercise} opener={showExcercise}/>
<AvilableExcercisesList excercises={filteredArray} ReloadOnAdd={ReloadData} planid={id} idsetter={showExcerciseID} closer={closeExcercise} opener={showExcercise} />
{showDetails && <div className={classes.fixeddiv}> <Backdrop onClick={closeExcercise}/>                             <ShowExcerciseDetails id={DetailsId} close={closeExcercise}/>
                 </div>} 
</section>);
}
export default AddExcercises;