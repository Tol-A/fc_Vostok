import React from 'react'
import logo from '../../images/v3.jpeg'

function Photo() {
  return (
    <div className='news'>
    <div className='word_new'>ФОТО</div>
    <div className='card'>
        <div className='new_card'>
            <img src = {logo} alt=''/>
            <div style = {{textAlign: 'center'}}>
                <h2>ФОТО</h2>
                <p> 9 сентября 2022</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Photo