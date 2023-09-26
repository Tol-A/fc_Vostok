import React from 'react'
import './CoachModule.css'
import { Card, Image } from 'react-bootstrap'
import logo from '../../images/ts1.jpeg'
import logo1 from '../../images/ts2.jpeg'
import logo2 from '../../images/ts3.jpeg'
import logo3 from '../../images/ts4.jpeg'
import logo4 from '../../images/ts5.jpeg'
import logo5 from '../../images/ts6.jpeg'
import logo6 from '../../images/ts7.jpeg'
import logo7 from '../../images/ts8.jpeg'
import logo8 from '../../images/ts9.jpeg'
import logo9 from '../../images/ts10.jpeg'
import logo10 from '../../images/ts11.jpeg'
import logo11 from '../../images/ts12.jpeg'




function Coach() {
  return (
    <div className='container_card'>
      <div className='card'>
      <h1 >ТРЕНЕРСКИЙ СОСТАВ</h1>
      <hr/>
      <div className='container_card_coach'>
        <Card className='card_coach'>
           <Image src={logo}  alt="..."/>
          <span>Колосницын Артем Михалыч</span>
          <span>Директор школы</span>
        </Card>
        <Card className='card_coach'>
           <Image src={logo1}  alt="..."/>
          <span>Павлютенкова Ирина Николаевна</span>
          <span> Врач</span>
        </Card>
        <Card className='card_coach'>
           <Image src={logo2}  alt="..."/>
          <span>Митрусков Валерий Сергеевич</span>
          <span>Тренер команд 2002, 2009, 2014 г.р.Тел. 8(926)353-87-45</span>
        </Card>
        <Card className='card_coach'>
           <Image src={logo3}  alt="..."/>
           <span>Цуканов Вячеслав Валерьевич.</span>
           <span>Тренер команд 2003, 2006 г.р.Тел. 8(929)971-95-44</span>
        </Card>
        <Card className='card_coach'>
           <Image src={logo4}  alt="..."/>
           <span>Гайдай Константин Викторович</span>
           <span>Тренер команд 2004, 2010 г.р.Тел. +7(926)829-48-49</span>
        </Card>
        <Card className='card_coach'>
           <Image src={logo5}  alt="..."/>
          <span>Проскуряков Анатолий Николаевич</span>
          <span>Тренер Команда 2005 г. Тел. 8(906)781-33-23</span>
        </Card>
        <Card className='card_coach'>
           <Image src={logo6}  alt="..."/>
          <span>Переходов Владимир Сергеевич.</span>
          <span>Тренер вратарей, второй тренер команды 2005 г.р. Тел. 8(926)341-34-23</span>
        </Card>
        <Card className='card_coach'>
           <Image src={logo7}  alt="..."/>
          <span>Мальков Евгений Юрьевич</span>
          <span>Тренер команды 2007 г.р.Тел. 8(926)664-93-78</span>
        </Card>
        <Card className='card_coach'>
           <Image src={logo8}  alt="..."/>
          <span>Болтышов Анатолий Михайлович</span>
          <span>Тренер команда 2008 г. Тел. 8(915)327-62-69</span>
        </Card>
        <Card className='card_coach'>
           <Image src={logo9}  alt="..."/>
          <span>Гафаров Ринат Юрьевич</span>
          <span>Тренер команд 2011,2012 г.р. Тел. 8(963)770-43-88</span>
        </Card>
        <Card className='card_coach'>
           <Image src={logo10}  alt="..."/>
          <span>Пархоменко Владислав Александрович</span>
          <span>Тренер команд 2011,2012 г.р. Тел. 8(905)508-98-74</span>
        </Card>
        <Card className='card_coach'>
           <Image src={logo11}  alt="..."/>
          <span>Клишин Илья Викторович</span>
          <span>Тренер команды 2013 г.р. Тел. 8(968)844-91-59</span>
        </Card>
      </div>
      </div>
    </div>
  )
}

export default Coach