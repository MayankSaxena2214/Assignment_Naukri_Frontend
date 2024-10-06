import React from 'react'
import "./CourseContainer.css"
import CourseCard from './CourseCard'
import card1 from "../../assets/card1.jpeg"
import card2 from "../../assets/card2.jpeg"
import card3 from "../../assets/card3.jpeg"
const CourseContainer = () => {
  return (
    <div className="course-container">
        <div className="course-container-heading">
        Make your photos more stylish
        </div>
        <div className="course-container-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </div>
        <div className="course-cards">
            <CourseCard image={card1} heading={"Sed ut perspiciatis"} info={"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."}/>
            <CourseCard image={card2} heading={"Sed ut perspiciatis"} info={"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."}/>
            <CourseCard image={card3} heading={"Sed ut perspiciatis"} info={"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."}/>
        </div>
    </div>
  )
}

export default CourseContainer