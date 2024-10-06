import React from 'react'
import "./Home.css"
import HeroSection from '../../pages/HeroSection/HeroSection'
import SnapPhotos from '../../pages/SnapPhotos/SnapPhotos'
import EverPosted from '../../pages/EverPosted/EverPosted'
import CourseContainer from '../../pages/CourseCard/CourseContainer'
import FreeTrial from '../../pages/FreeTrial/FreeTrial'
const Home = () => {
  return (
    <div className='home-container'>
        <HeroSection/>
        <SnapPhotos/>
        <div className="mt">
        <EverPosted />
        </div>
        <div className="mt">
        <CourseContainer/>
        </div>
        <div className="mt">
            <FreeTrial/>
        </div>
        
    </div>
  )
}

export default Home