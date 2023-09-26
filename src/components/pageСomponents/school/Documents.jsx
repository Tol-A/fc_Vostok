import React from 'react'
import './DocumentsModule.css'
import logo from '../../images/doc_1.jpeg'
import logo1 from '../../images/doc_2.jpeg'
import logo2 from '../../images/doc_3.jpeg'
import logo3 from '../../images/doc_4.jpeg'
import logo4 from '../../images/doc_5.jpeg'
import logo5 from '../../images/doc_6.jpeg'
import logo6 from '../../images/doc_7.jpeg'
import logo7 from '../../images/doc_8.jpeg'
import logo8 from '../../images/doc_9.jpeg'
import logo9 from '../../images/doc_10.jpeg'
import logo10 from '../../images/doc_11.jpeg'


function Documents() {
  return (
    <div className='container_documents'>
    <div className='documents'>
      <h1 className ='documents_indent'>ДОКУМЕНТЫ</h1>
      <hr/>
      <div className='documents_list'>
        <p>Приказ-02ЕИС-от-30.12.2021-Об-утверждении-АР.</p>
        <p>2022 Административный регламент МБУ ФСШ ВОСТОК-Электросталь Прием в МБУ ФСШ</p>
        <p>2022-23-24 гг Муниципальное задание МБУ ФСШ ВОСТОК-Электросталь</p>
        <p>2022-23-24 гг План финансово-хозяйственной деятельности</p>
        <p>ПРОГРАММА спортивной подготовки по виду спорта ФУТБОЛ</p>
        <p>УСТАВ утвержден Постановлением Администрации г.о.Электросталь № 572-р от 06.10.2017</p>
        <p>Федеральный стандарт по виду спорта футбол Приказ 880 от 25.10.2019</p>
        <p>ПРОГРАММА общеразвивающая по виду спорта — футбол</p>
        <p>Регламент работы приемной и апелляционной комиссий</p>
        <p>Список документов для предоставления Услуги по приему в МБУ ФСШ ВОСТОК-Электросталь</p>
        <p>Сроки приема(подачи) документов для предоставления Услуги по приему в МБУ ФСШ ВОСТОК-Электросталь</p>
        <p>Постановление   Администрации г.о. Электросталь № 116/2 от 28.02.2017  Об утверждении положения о льготах на платные услуги</p>
        <p>Образец договора об оказании платных услуг физкультурно-спортивной направленности</p>
        <p>Нормативы общей физической и специальной физической подготовки для зачисления в группы на этапе начальной подготовки 1-го года</p>
        <p>Положение о персональных-данных утверждено приказом №6 от 01.09.2016</p>
      </div>
      <div className='documents_img'>
        <div className='doc'>
         <img src = {logo} alt =''/>
          <p>Постановление</p>
        </div>
        <div className='doc'>
         <img src = {logo1} alt =''/>
          <p>Свидетельство</p>
        </div>
        <div className='doc'>
         <img src = {logo2} alt =''/>
          <p>Свидетельство</p>
        </div>
        <div className='doc'>
         <img src = {logo3} alt =''/>
          <p>Свидетельство</p>
        </div>
        <div className='doc'>
         <img src = {logo4} alt =''/>
          <p>Сертификат</p>
        </div>
        <div className='doc'>
         <img src = {logo5} alt =''/>
          <p>Сертификат</p>
        </div>
        <div className='doc'>
         <img src = {logo6} alt =''/>
          <p>Приказ №01 от 05.10.2020 О создании приемной и апелляционной комиссий</p>
        </div>
        <div className='doc'>
         <img src = {logo7} alt =''/>
          <p>Сроки приема документов на 2021 спортивный год</p>
        </div>
        <div className='doc'>
         <img src = {logo8} alt =''/>
          <p>Список документов, обязательных для предоставления</p>
        </div>
        <div className='doc'>
         <img src = {logo9} alt =''/>
          <p>Приказ №03 от 05.10.2020 Об утверждении сроков по предоставлению услуги</p>
        </div>
        <div className='doc'>
         <img src = {logo10} alt =''/>
          <p>Приказ №02 от 05.10.2020 О работе приемной и апелляционной комиссий</p>
        </div>
      </div>
      
    </div>
   </div>
  )
}

export default Documents