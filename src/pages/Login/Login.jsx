import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { UserData } from '../../context/UserContext';
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {login}=UserData();
    const navigate=useNavigate();
    const submitHandler=async(e)=>{
        e.preventDefault();
        await login(email,password,navigate);
    }
  return (
    <div className="login-container">
        <div className="form">
        <h2>Login</h2>
            <form action="">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" required placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
                <label htmlFor="password">Password</label>
                <input id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' type="text" />

                <button onClick={submitHandler}>Login</button>
                <div className="redirect">
                    <p>Not Registered?</p>
                    <Link to={"/register"}>Register Here</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login