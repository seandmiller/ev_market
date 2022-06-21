import React from 'react';
import {NavLink} from 'react-router-dom';


export default function Navi() {

    return (
        <div className='navi-wrapper'>
          <div className='link-container'>
        <NavLink to='/'>Home </NavLink>

         <NavLink to='/cars'>Cars </NavLink>

         </div>
    
      <div className='nav-login-wrapper'>
          <NavLink to='/signin'>Sign In</NavLink>
          <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6B8BCmoW8koXj9xeKBFaSNbrk8SUWYhxRwg&usqp=CAU'/>
      </div>

        </div>
    )
}