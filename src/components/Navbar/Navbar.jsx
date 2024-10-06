import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { PiCubeTransparentFill } from "react-icons/pi";
import { UserData } from '../../context/UserContext';
const Navbar = () => {
  const {user,logout}=UserData();
  const handleLogout=async()=>{
    await logout();
  }
  return (
    <div className="navbar-container">
        <div className="navbar-logo">
           <Link to="/"><PiCubeTransparentFill/> <p>Logo</p></Link>
        </div>
        <div className="navbar-navigation">
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Community</li>
                <li>Support</li>
            </ul>
        </div>
        {
          user?(<>
            <div className="navbar-btns">
            <button onClick={handleLogout}>Logout</button>
        </div>
          </>):(<div className="navbar-btns">
            <Link to={"/login"}><button>Login</button></Link>
            <Link to={"/register"}><button>Signup</button></Link>
        </div>)
        }
    </div>
  )
}

export default Navbar