import React, {useState } from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
import '../style/login.css'
import Kkk from '../assets/icons/s1.png'
import { Box } from '@mui/material';
import Logo from '../assets/logo.png';
import Footer from './footer';


function Login() {
 
  const history=useNavigate();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  async function submit(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/",{
        email,password
      })
      .then(res=>{
        if(res.data==="exist"){
              history("/home",{state:{id:email}})
        }
        else if(res.data==="notexist"){
         alert("User have not Signup")
        }
      })
      .catch(e=>{
        alert("wrong Deatils")
        console.log(e);
      })
    }
    catch(e){
     console.log(e);
    }
  }
 
    return (
      <>
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
            <Box
              component="img"
              sx={{
                height: { xs: '16px', sm: '22px', md: '26px' },
                width: 'auto',
                position:'absolute',
                top:'2vh',
                left:'4v',
              }}
              alt="logo"
              src={Logo}
            />
    </div>
  
    <ul class="nav navbar-nav navbar-right">
      <li><a href="./Signup"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="./"><span class="glyphicon glyphicon-log-in"></span> LogIn</a></li>
    </ul>
  </div>
</nav>
      <img src={Kkk} className='imh'></img>
      <div className='login'>
     
     
        <h1 className='h11'>Log-in</h1>
        <form action="POST">
          <label>Email </label>
          <br></br>
          <input className='input1'type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='abc@gmail.com'></input>
          <br></br>
          <label>Password </label>
          <br></br>
          <input className='input1' type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password'></input>
        </form>
        <button><Link to="/home" className='ss'>Login</Link></button>
        
        <p>OR</p>
        <Link to="/signup" className='ss'>Signup Page</Link>
      </div>
   
      </>

    )
}

export default Login;