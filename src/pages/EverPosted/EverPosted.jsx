import React from 'react'
import "./EverPosted.css"
import everposted from "../../assets/everposted.jpeg"
const EverPosted = () => {
  return (
    <div className="everposted-container">
        <div className="everposted-heading">
        Have you ever posted any photo on social media?
        </div>
        <div className="everposted-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </div>
        <div className="everposted-content-container">
            <div className="everposted-content">
                <div className="everposted-content-info">
                    <div className="everposted-content-info-heading">Sed ut perspiciatis</div>
                    <div className="everposted-content-info-para">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</div>
                </div>
                <div className="everposted-content-info">
                    <div className="everposted-content-info-heading">Sed ut perspiciatis</div>
                    <div className="everposted-content-info-para">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</div>
                </div>
                <div className="everposted-content-info">
                    <div className="everposted-content-info-heading">Sed ut perspiciatis</div>
                    <div className="everposted-content-info-para">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</div>
                </div>
            </div>
            <div className="everposted-image">
                <img src={everposted} alt="" />
            </div>
        </div>
    </div>
  )
}

export default EverPosted