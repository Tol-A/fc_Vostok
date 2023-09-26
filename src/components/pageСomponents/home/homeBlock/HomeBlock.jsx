import React from 'react'
import './HomeBlockModule.css'
import Button from 'react-bootstrap/Button';
import { BiFootball } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { VscSmiley } from "react-icons/vsc";




function HomeBlock() {
  return (
    <div className='home_block_module'>
        <div>
            <p className='icon_block_module'><BiFootball className='bi_football'/></p>
            <strong>О ШКОЛЕ</strong>
            <p className='text_homeBlock'>С сентября 2012 года МБУ «ФСШ «ВОСТОК-Электросталь» обрела свой дом, было введёно в эксплуатацию искусственное футбольное поле последнего поколения, месторасположение МОУ СОШ № 11.</p>
            <Button href="/school/abaut" variant="secondary" size="sm"  className='btn_SchoolEnrollment'>ЧИТАТЬ ДАЛЕЕ</Button>      
        </div>
        <div>
            <p className='icon_block_module'><FaRegCalendarAlt className='bi_football'/></p>
            <strong>РАСПИСАНИЕ ТРЕНИРОВОК</strong>
            <p className='text_homeBlock'>Актуальное расписание занятий</p>
            <Button href="/school/workout" variant="secondary" size="sm"  className='btn_SchoolEnrollment'>ЧИТАТЬ ДАЛЕЕ</Button>       
        </div>
        <div>
            <p className='icon_block_module'><VscSmiley className='bi_football'/></p>
            <strong>О ЗАНЯТИЯХ</strong>
            <p className='text_homeBlock'>Приглашаем всех желающих заниматься футболом на платной основе в спортивно-оздоровительные группы с 5 до 8 лет. Так же приглашаем футболистов с 9 до 17 лет на просмотровые занятия с возможностью последующего зачисления в команды.</p>
            <Button href="/school/abaut" variant="secondary" size="sm"  className='btn_SchoolEnrollment'>ЧИТАТЬ ДАЛЕЕ</Button>   
        </div>
    </div>
  )
}

export default HomeBlock