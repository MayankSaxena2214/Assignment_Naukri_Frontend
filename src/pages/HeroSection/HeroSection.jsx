import React from 'react'
import "./HeroSection.css"
import { Link } from 'react-router-dom'
const HeroSection = () => {
  return (
    <div className="hero-container">
        <div className="hero-content">
        The largest community of photo enthusiasts
        </div>
        <div className="hero-btn">
        <Link style={{textDecoration:"none"}} to={"/register"}><button>Join Today</button></Link>
        </div>
    </div>
  )
}

export default HeroSection