import React from 'react'
import { Box } from '@mui/material';
import Logo from '../assets/logo.png';

function Nav(){
return (
     <>
     <div>
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
      <li><a href="./"><span class="glyphicon glyphicon-log-in"></span> LogOut</a></li>
    </ul>
  </div>
</nav>
     </div>
     </>
    )
}

export default Nav;