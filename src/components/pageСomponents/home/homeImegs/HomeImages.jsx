import React from 'react'
import './HomeImegsModule.css'
import logo from '../../../images/IMG_1.jpeg'
import logo1 from '../../../images/IMG_2.jpeg'
import logo2 from '../../../images/IMG_3.jpeg'
import logo3 from '../../../images/IMG_4.jpeg'
import logo4 from '../../../images/IMG_5.jpeg'
import logo5 from '../../../images/IMG_6.jpeg'
import logo6 from '../../../images/IMG_7.jpeg'
import logo7 from '../../../images/IMG_8.jpeg'


function HomeImages() {
  return (
    <div className='homeImages'>
        <img src = {logo} className='image' alt = ''/>
        <img src = {logo1} className='image' alt = ''/>
        <img src = {logo2} className='image' alt = ''/>
        <img src = {logo3} className='image' alt = ''/>
        <img src = {logo4} className='image' alt = ''/>
        <img src = {logo5} className='image' alt = ''/>
        <img src = {logo6} className='image' alt = ''/>
        <img src = {logo7} className='image' alt = ''/>

       
    </div>
  )
}

export default HomeImages