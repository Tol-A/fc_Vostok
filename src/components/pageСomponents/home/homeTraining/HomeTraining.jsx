import React from 'react'
import './HomeTrainingModule.css'
import logo from '../../../images/vostok6.jpeg'
import logo2 from '../../../images/vostok7.png'
import logo3 from '../../../images/vostok8.jpeg'
import { BiCalendar } from 'react-icons/bi'


function HomeTraining() {
  return (
    <div className='homeTraining'>
        <p className='word_news'>Новости</p>
        <div className='container_homeTraining'>
            <div className='training'>
                <img src = {logo} alt = '' className='training_img'/>
                <span className='data_training'> <BiCalendar/> 25.08.2022</span> 
                <a href="novosti_1" className='text_training' >МУНИЦИПАЛЬНАЯ ФУТБОЛЬНАЯ ШКОЛА «ВОСТОК — ЭЛЕКТРОСТАЛЬ» ОТКРЫВАЕТ ФИЛИАЛ НА ВОСТОЧНОЙ СТОРОНЕ ГОРОДА. ПРИГЛАШАЕМ ДЕТЕЙ ДЛЯ ЗАНЯТИЙ ФУТБОЛОМ!</a>
            </div>

            <div className='training'>
                <img src = {logo2} alt = '' className='training_img'/>
                <span className='data_training'> <BiCalendar/> 28.08.2021</span> 
                <a href = 'info' className='text_training'>ФУТБОЛЬНАЯ ШКОЛА «ВОСТОК-ЭЛЕКТРОСТАЛЬ» ПРОВОДИТ НАБОР ДЕТЕЙ 2016-17, 2015, 2014, 2013-2005 Г.Р.</a>
            </div>

            <div className='training'>
                <img src = {logo3} alt = '' className='training_img'/>
                <span className='data_training'> <BiCalendar/> 07.08.2021</span> 
                <a href = 'info2' className='text_training'>ФУТБОЛЬНАЯ СПОРТИВНАЯ ШКОЛА «ВОСТОК-ЭЛЕКТРОСТАЛЬ» ПРОВОДИТ НАБОР МАЛЬЧИКОВ И ДЕВОЧЕК В КОМАНДУ 2016 ГОДА РОЖДЕНИЯ.</a>
            </div>
        </div>
    </div>
  )
}

export default HomeTraining