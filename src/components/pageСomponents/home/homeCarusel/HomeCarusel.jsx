import React from 'react'
import './HomeCarusel.css'
import MyCarousel from '../../carusel/MyCarusel'
import Emblem from '../../emblem/Emblem'

function HomeCarusel() {
  return (
    <div className='container_homeCarusel'>
              <MyCarousel/>
              <Emblem/>
    </div>
  )
}

export default HomeCarusel