import React from 'react'
import './MyBurgerModule.css'
import { NavLink } from 'react-router-dom'
import CustomLink from '../../pages/CustomLink'
import { GrAddCircle } from 'react-icons/gr'



function MyBurger() {

  return (
    <>
      <nav className="navbar" >
        <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" >
          <span className="navbar-toggler-icon"></span> 
        </button>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
          <div className='nav_link_burger'>
          <span className='navbar-h'/>
          <CustomLink to = '/'>ГЛАВНАЯ</CustomLink>
           <span className='navbar-r'/>
           <CustomLink to = 'news'>НОВОСТИ </CustomLink> 
           <div className="accordion">
              <input type="checkbox" id="tab1" />
              <label className="accordion-label" htmlFor="tab1"> ШКОЛА  <GrAddCircle  className='add'/></label>
              <div className="accordion-content">
                 <li ><NavLink to = 'school/abaut' className = 'arrow'> О ШКОЛЕ </NavLink></li> <hr/> 
                 <li><NavLink to = 'school/managements' className = 'arrow'>РУКОВОДСТВО</NavLink></li> <hr/>   
                 <li> <NavLink to = 'school/coach' className = 'arrow'> ТРЕНЕРСКИЙ СОСТАВ</NavLink></li> <hr/>   
                 <li> <NavLink to = 'school/workout' className = 'arrow'>РАСПИСАНИЕ ТРЕНИРОВОК</NavLink></li> <hr/>   
                 <li><NavLink to = 'school/documents' className = 'arrow'>ДОКУМЕНТЫ</NavLink></li>  <hr/>  
                 <li><NavLink to = 'school/teams' className = 'arrow'>КОМАНДЫ</NavLink></li>  <hr/>  
                 <li><NavLink to = 'school/help' className = 'arrow'> НАМ ПОМОГАЮТ</NavLink></li> <hr/>          
               </div>
            </div>     
             <div className="accordion">
                <input type="checkbox" id="tab2" />
                <label className="accordion-label" htmlFor="tab2"> МЕДИА  <GrAddCircle  className='add'/></label>
                  <div className="accordion-content">
                     <li> <NavLink to = 'media/photo' className = 'arrow'> ФОТО </NavLink></li> <hr/>
                     <li><NavLink to = 'media/video' className = 'arrow'>ВИДЕО</NavLink></li>   <hr/>   
                  </div>
            </div>
              <CustomLink to = 'contact'>КОНТАКТЫ</CustomLink>
            </div>
      </div>
    </>
  )
}

export default MyBurger


