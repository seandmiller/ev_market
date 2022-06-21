import React from 'react';
import { useState } from 'react';

export default function SignIn() {
    return (
        <div className='login-wrapper'>
            <h4>Sign in</h4>
      <form>
        <input placeholder='username'  name='username' />
        <input placeholder='password' name='pass'      />


      </form>


        </div>
    )
}