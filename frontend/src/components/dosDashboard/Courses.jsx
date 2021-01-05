import React from 'react';
import '../../styles/dos.css';
import guru from '../../images/guru.png';
import {Link } from 'react-router-dom';
import classes from '../../images/classes.png';
import courses from '../../images/courses.png';
import teachers from '../../images/teachers.png';
import todo from '../../images/todo.png';

function Classes(){ 


   return(

       <div className="wrapper">

           <div className="left">
               <div className="profile">
              <img src={guru} alt=" stafguru"/>
               </div>

               <ul>
                   <Link to='/classes' >
                   <li className="list_item">
                       <img src={classes} alt="classes"  className="icon"/> 
                        <span style={{marginLeft:'1em'}}>Classes  </span>  </li>
                   </Link>
                   <Link to='/teachers'>
                   <li className="list_item">
                   <img src={teachers} alt="teachers"  className="icon"/> 
                   <span style={{marginLeft:'0.5em'}}> Teachers  </span>  </li>
                   </Link>
                   <Link to='/courses' className="current_page">
                   <li className="list_item">
                   <img src={courses} alt="courses"  className="icon"/> 
                   <span style={{marginLeft:'1.3em'}}>Courses  </span>   </li>
                   </Link>
                   <Link to='/todo'>
                   <li className="list_item">
                   <img src={todo} alt="todo"  className="todo"/> 
                   <span style={{marginLeft:'1em'}}> Todo</span> </li>
                   </Link>
               </ul>

           </div>
           <div className="right">
               <div className="content">
                  <div className="header">

                  </div>

                  <h1 style={{ textAlign:'center'}}>courses panel</h1>
               </div>
           </div>
       </div>
   );
}

export default Classes;