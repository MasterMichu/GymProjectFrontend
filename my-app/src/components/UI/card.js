import React from 'react';
import ReactDOM from 'react-dom';
import classes from "./card.module.css";

function Card (props){
return <div className={classes.card}>{props.children}</div>;
}
export default Card;