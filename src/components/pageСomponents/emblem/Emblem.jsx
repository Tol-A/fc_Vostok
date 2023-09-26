import React from 'react'
import './EmblemModule.css'
import logo from './../../images/gerb3.png'

function Emblem() {
  return (
    <div className='contaoner_emblem'>
        <strong className='text'>Футбольная Спортивная Школа </strong>
        <strong className='text'>г. о. Электросталь</strong>
        <img src = {logo} alt = ''/>
    </div>
  )
}

export default Emblem