import React from 'react';
import '../../styles/register.css';
import forward from '../../images/forward.png';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import {  useContext} from 'react';
import {useHistory} from 'react-router-dom';
import{AiFillEye} from 'react-icons/ai';
import {credentialContext} from'../../App';
import '../../styles/responsive.css';


function  Register(props){

   
    const[ firstname,setFirstname]= useState("");
    const [ lastname,setLastname]=useState("");
    const [schoolCode,setSchoolCode] = useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[isError,setError]=useState("");
    const[,setCredentials] = useContext(credentialContext);
    const[passwordShown,setPasswordShown]= useState(false);


 
  const  tooglePasswordVisibility =()=>{
       setPasswordShown(passwordShown ? false:true)
  }

    const handleErrors = async(response)=>{

            if(!response.ok){

                const{message} = await response.json();
                console.log(" message:",message);
                throw Error(message);
     
            }

            return  response.json();
    }

    const register=(e)=>{
        e.preventDefault();
        fetch('http://localhost:5000/user/register',{
        
        method:'POST',
        headers:{ 
            "content-type":"application/json"
        },
      
        body:JSON.stringify({
               firstname,
               lastname,
               schoolCode,
               email,
               password,
               rank: props.location.state.rank
        })  
    })
                          
        .then( handleErrors)
        .then(()=>{
            setCredentials({
                firstname,
                lastname,
                schoolCode,
                email,
                password,
            })

            history.push('/Classes');
        })

        .catch( (error)=>{
            setError(error.message);
        })
        
    }

    const history = useHistory();
    
    return(
       <div className="body Register Login">
        <div className="container">
    
       <div className="leftRow">
                  
                <div className="upper">
                    <p className="company">COMP<span className="guru">ANY</span></p>
                <Link to="/login">
                    <li >Login</li>
                    </Link>
                    <Link to="/" className="active">
                    <li>Register</li>
                    </Link>
                </div>
                      <form  className="form" onSubmit={register}>
                          <label >
                         <input type = " text" placeholder="firstname"  onChange={(e)=>setFirstname(e.target.value) } />
                     
                         </label>
                         
                         <label >
                         <input type = " text"  placeholder="lastname" className=" input" onChange={(e)=>setLastname(e.target.value)} />
                        
                         </label>
                         <label >
                         <input type = " text" placeholder="schoolCode" className=" input" onChange={(e)=>setSchoolCode(e.target.value)} />
                        
                         </label>
                         <label >
                         <input type = " email" placeholder="email" className=" input" onChange={(e)=>setEmail(e.target.value)} />
                       
                         </label>
                         <label >
                         <input type = {passwordShown ? " text": "password"} placeholder="password" className=" input" onChange={(e)=>setPassword(e.target.value)}/>
                         <i onClick ={tooglePasswordVisibility} ><AiFillEye className="eye"/></i>
                         <div  ><p style={{ color:'red',marginLeft:'6em',marginTop:'-1.2em'}}>{isError}</p></div>
                         </label>
                         <label>
                             <button type="submit"  >Sign up</button>
                         </label>
                      </form>
                      </div>

                      <div className="sideRow">
           <img src={forward} alt=" forward" className="forward"/>
       </div>
        </div>
        </div>
    );
}

export default Register;