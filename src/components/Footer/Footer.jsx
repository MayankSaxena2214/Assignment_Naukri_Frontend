import React from 'react'
import "./Footer.css"
import {FaFacebook,FaInstagram,FaLinkedin,FaTwitter,FaBuilding} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-upper">
            <div className="footer-logo"><FaBuilding/> Logo</div>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="left1">
                        <div className="left1-heading">Mobile app</div>
                        <div className="left1-content-container">
                            <div className="content">Features</div>
                            <div className="content">Live Share</div>
                            <div className="content">Video Recorded</div>
                        </div>
                    </div>

                    <div className="left1">
                        <div className="left1-heading">Community</div>
                        <div className="left1-content-container">
                            <div className="content">Featured Artists</div>
                            <div className="content">The Portal</div>
                            <div className="content">Live Events</div>
                        </div>
                    </div>
                    <div className="left1">
                        <div className="left1-heading">Company</div>
                        <div className="left1-content-container">
                            <div className="content">About us</div>
                            <div className="content">Contact us</div>
                            <div className="content">History</div>
                        </div>
                    </div>
                </div>
                <div className="footer-content-right">
                    <button>Register</button>
                    <button>Login</button>
                </div>
            </div>
        </div>
        <hr className='footer-hr' />
        <div className="footer-lower">
            <div className="copyright">© Photo, Inc. 2019. We love our users!</div>
            <div className="socials">
                <div className="social-follow">Follow Us</div>
                <div className="social-icon"><FaFacebook className='icon'/></div>
                <div className="social-icon"><FaTwitter  className='icon'/></div>
                <div className="social-icon"><FaLinkedin className='icon'/></div>
                <div className="social-icon"><FaInstagram className='icon'/></div>
            </div>
        </div>
    </div>
  )
}

export default Footer