import ReactDOM from 'react-dom';
import { Chart } from "react-google-charts";
import React from 'react';
import {useEffect, useState} from "react";
import classes from './Charts.module.css';
export const data = [
  ["Year", "Sales", "Expenses"],
  ["10-10-2007", 1000, 400],
  ["10-10-2004", 1170, 460],
  ["10-10-2005", 660, 1120],
  ["10-10-2006", 1030, 540],
];





function Charts() {
const [isloading,setisloading] = useState(true);
const [mydata,setmydata]=useState(null);

function ChartInstance(props) {
console.log(props.name);
  console.log(props.results);
  console.log(props.key);
  const options = {
    'chartArea': {
      'backgroundColor': {
          'fill': 'transparent',
          'opacity': 100
       },
   },
  backgroundColor:"transparent",
  colors: ['black', 'blue'],
  title: props.name,
  curveType: "linechart",
  legend: { position: "bottom" },
  "hAxis":{'baselineColor':'white',"textStyle":{ 'color':'white',},"titleTextStyle":{ 'color':'white',},},
  "vAxis":{'baselineColor':'white',"textStyle":{ 'color':'white',},"titleTextStyle":{ 'color':'white',},},
  "legend":{"textStyle":{ 'color':'white',},"titleTextStyle":{ 'color':'white',},'position': 'bottom'},
  "titleTextStyle":{"color":"white"},
    };

return (
<div key={props.key}>

    <Chart
      chartType="LineChart"
      width="100%"
      height="200px"
      background-color= "#44444466"
      webkit-backdrop-filter= "blur(5px)"
      backdrop-filter= "blur(5px)"

      data={props.results}
      options={options}
    />

    </div>
  );





}

function ChartGenerator(props) {
  return props.mydata.map((item, rowIndex)=> <div className={classes.ChartBackground}><ChartInstance name={item.name} results={item.results} key={rowIndex}/></div> );


}
useEffect(()=>{
    fetch("https://api-gym-tracker.azurewebsites.net/plansapi/trainingresults/",
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
    setmydata(data);
    setisloading(false);
    });
    },[]);

if(isloading){
return (
<div>
<h1> is loading ....</h1>

</div>);

}

console.log(mydata);



return (

<div>
<ChartGenerator mydata={mydata} />
</div>



);
}


export default Charts;