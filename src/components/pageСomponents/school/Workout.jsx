import React from 'react'
import './WorkoutModule.css'

function Workout() {
  return (
   <div className='container_workout'>
    <div className='workout'>
      <h1 className ='workout_indent'>РАСПИСАНИЕ ТРЕНИРОВОК</h1>
      <hr/>
        <span className ='workout_indent' >Актуальное расписание тренировок.</span>
      <div className ='workout_indent'>
          <iframe 
            title="workout"
            width="100%"
            height="1200px"
            src="http://fc-vostok.ru/wp-content/plugins/pdfjs-viewer-shortcode/pdfjs/web/viewer.php?file=http://fc-vostok.ru/wp-content/uploads/09-15-сентября-2019.pdf&attachment_id=&dButton=true&pButton=true&oButton=false&sButton=true#zoom=auto&pagemode=none&_wpnonce=0eb45c0c7e">
        </iframe>
      </div>
    </div>
   </div>
  )
}

export default Workout