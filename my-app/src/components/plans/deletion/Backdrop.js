import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Backdrop.module.css'
function Backdrop(props) {

return (<div className={classes.backdrop} onClick={props.onClick}/>);


}
export default Backdrop;