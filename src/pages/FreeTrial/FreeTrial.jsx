import React, { useState } from 'react'
import "./FreeTrial.css"
import { useNavigate } from 'react-router-dom';
import { UserData } from '../../context/UserContext';
const FreeTrial = () => {
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
    <div className="freetrial-container">
        <div className="freetrial-content">
            <div className="freetrial-content-heading">
            Ready to take a free trial?
            </div>
            <div className="freetrial-content-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            </div>
        </div>
        <div className="freetrial-form">
            <form action="">
                <div className="form-heading">
                Sign up for a free account
                </div>
                <div className="input-elements">
                    <div className="input-pair">
                        
                        <input id="firstName" type="text" required placeholder='Enter your first name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}  />
                        <input id="LastName" type="text" required placeholder='Enter your last name' value={lastName} onChange={(e)=>setLastName(e.target.value)}  />
                    </div>
                    <div className="input-pair">
                    <input id="email" type="email" required placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
                        <input id="phone" type="number" required placeholder='Enter your phone number' value={phone} onChange={(e)=>setPhone(e.target.value)}  />
                    </div>
                    <div className="input100">
                    <input id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' type="text" />
                    </div>
                </div>
                <div className="form-btn">
                <button>Register</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default FreeTrial