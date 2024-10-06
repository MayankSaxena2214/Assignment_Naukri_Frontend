import React from 'react'
import "./CourseCard.css"
const CourseCard = ({image,heading,info}) => {
  return (
    <div className="card">
        <div className="image">
            <img src={image} alt="" />
        </div>
        <div className="content">
            <div className="content-heading">{heading}</div>
            <div className="content-info">{info}</div>
        </div>
    </div>
  )
}

export default CourseCard