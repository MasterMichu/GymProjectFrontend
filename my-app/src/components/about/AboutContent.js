import React from 'react';
import ReactDOM from 'react-dom';
import MainNavigation from  "../../public/MainNavigation.png";
import LoginScreen from  "../../public/LoginScreen.png";
import PlansModification from  "../../public/PlansModification.png";
import AllPlans from  "../../public/AllPlans.png";
import styles from "./AboutContent.Module.css";
function AboutContent() {
return (
<div className={styles.box}>
<p>First of all welcome to my web-app, i am glad you are here.</p>
<p>This web app was prepared for people who enjoy strength training at the gym. <br/> To fully understand why <strong> You </strong> need this app i want you to think about this questions: <br/> How often do you take notes at gym? <br/> How do You keep track of your progress? <br/> Where do You keep your workout plans? <br/> How do You know if You are getting any stronger? <br/> I am happy to help You with all of above with this app. <br/> Please note that app is still being upgraded and what You see is not my "last word". </p>
<p><b>After this short introduction, please look at short instruction below</b></p>
<div className={styles.pictureplaceholder}>
<img className={styles.picture} src={LoginScreen} height="20%"/>
</div>
<p>If it is Your first visit you will surely see the authentication part <br/> If you want to sign in and use the app please keep in mind: <strong>Use only strong passwords, don't provide passwords to other services</strong></p>
<div className={styles.pictureplaceholder}>
<img className={styles.picture} src={MainNavigation} height="20%"/>
</div>
<p>To move arround the app, use main navigation bar, You are provided with 6 options there: <br/> AddPlan- here You create new traing plan, after submitting planname you will be asked to add excercises <br/> AllPlans- you can preview what are your plans that you already have <br/> Charts- You are served charts describing your progess here based on Your trainings results.<br/>RawData-page in built<br/>About and logout</p>
<div className={styles.pictureplaceholder}>
<img className={styles.picture} src={AllPlans} height="20%"/>
</div>
<div className={styles.pictureplaceholder}>
<img className={styles.picture} src={PlansModification} height="20%"/>
</div>

</div>


);





}




export default AboutContent;