import React, { useState, useEffect } from "react";
import Input from '../components/Input'; 
import Title from '../components/Title' 

function SignUp() {
  return (
    <div className="container mx-auto align-middle max-w-xs">
      <Title title='Create An Accout' />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Input id='first_name' placeholder='First Name' />
        <Input id='last_name' placeholder='Last Name' />
        <Input id='username' placeholder='Username' />   
        <Input id='email' type='email' placeholder='Email' />   
        <Input id='password' type='password' placeholder='Password' />
        <Input id='confirm_password' type='password' placeholder='Confirm Password' />  
        <div className="text-left">
          <input
            className="mr-2 accent-blue"
            id="is_vendor"
            type="checkbox"
          />
          <span className="text-sm text-grey">I want to be a vendor!</span>
        </div>

        <button
          className="bg-sec hover:bg-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
