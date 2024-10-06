import React, { useState } from 'react'
import "./Register.css"
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { UserData } from '../../context/UserContext';
const Register = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [phone,setPhone]=useState("");

    const {register}=UserData();
    const navigate=useNavigate();
    const submitHandler=async(e)=>{
        e.preventDefault();
        await register(firstName,lastName,phone,email,password,navigate);
        
    }
  return (
    <div className="login-container">
        <div className="form">
        <h2>Register</h2>
            <form action="">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" required placeholder='Enter your first name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}  />

                <label htmlFor="firstName">Last Name</label>
                <input id="LastName" type="text" required placeholder='Enter your last name' value={lastName} onChange={(e)=>setLastName(e.target.value)}  />

                <label htmlFor="phone">Phone</label>
                <input id="phone" type="number" required placeholder='Enter your phone number' value={phone} onChange={(e)=>setPhone(e.target.value)}  />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" required placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}  />

                <label htmlFor="password">Password</label>
                <input id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' type="text" />

                <button onClick={submitHandler}>Register</button>
                <div className="redirect">
                    <p>Already Registered?</p>
                    <Link to={"/login"}>Login Here</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register