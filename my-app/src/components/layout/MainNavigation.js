import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import React, { useState, useEffect, Fragment } from 'react';
import {AiOutlineOrderedList, AiOutlineLineChart} from 'react-icons/ai';
import {FaPlus} from 'react-icons/fa';
import{FiLogOut} from 'react-icons/fi';
import {FaDatabase,FaBed} from 'react-icons/fa';
import {BsInfoSquareFill} from 'react-icons/bs';
import {CiDumbbell} from 'react-icons/ci';
import {MdFastfood} from 'react-icons/md';
const MainNavigation = () => {
  const [isAuth, setIsAuth] = useState(false);

useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

return <header className={classes.header}>
    <nav>
        <div>
            <h1 className={classes.topquote}>Track your results to increase performance</h1>
            <h1 className={classes.bottomquote}>Train hard <CiDumbbell/> eat much <MdFastfood/> sleep well <FaBed/> </h1>
        <ul className={classes.navbar}>
            {isAuth == true? (
            <Fragment>
                <li className={classes.inlinelist}>
                    <Link to="/AddPlan" className={classes.link}><FaPlus/> AddPlan </Link>
                </li>
                <li className={classes.inlinelist}>
                    <Link to="/AllPlans" className={classes.link}>  <AiOutlineOrderedList/> AllPlans </Link>
                </li>
                <li className={classes.inlinelist}>
                    <Link to="/Charts" className={classes.link}><AiOutlineLineChart/> Charts </Link>
                </li>
                <li className={classes.inlinelist}>
                    <Link to="/RawTrainingLogs" className={classes.link}><FaDatabase/> RawData </Link>
                </li>
                
                <li className={classes.inlinelist}>
                <Link to="/" className={classes.link}><BsInfoSquareFill/> About </Link>
                </li>
                
                <li className={classes.inlinelist}>
                    <Link to="/logout" className={classes.link}><FiLogOut/> logout </Link>
                </li>
                </Fragment>
            ):
            (
            <Fragment>
            <li className={classes.inlinelistbeforelogin}>
                <Link to="/login" className={classes.link}> Login </Link>
            </li>
            <li className={classes.inlinelistbeforelogin}>
                <Link to="/signup" className={classes.link}> Signup </Link>
            </li >
            <li className={classes.inlinelistbeforelogin}>
                <Link to="/" className={classes.link}> About </Link>
            </li>
            </Fragment>
            )}

        </ul>
        </div>
    </nav>
</header>;


}


export default MainNavigation;