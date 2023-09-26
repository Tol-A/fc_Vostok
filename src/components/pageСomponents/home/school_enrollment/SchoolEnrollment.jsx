import React from 'react'
import Button from 'react-bootstrap/Button';
import './SchoolEnrollmentModule.css'

function SchoolEnrollment() {
  return (
    <div className='contaoner_SchoolEnrollment'>
        <p>Муниципальное Бюджетное Учреждение "Футбольная Спортивная Школа "ВОСТОК - Электросталь"</p>
         <Button href="/contact" variant="secondary"  className='btn_SchoolEnrollment'>ЗАПИСАТЬСЯ В ШКОЛУ</Button>   
    </div>
  )
}

export default SchoolEnrollment