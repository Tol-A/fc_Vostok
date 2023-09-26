import React from 'react'
import './HeaderModule.css'
import CustomLink from '../../pages/CustomLink'
import logo from '../../images/log-vostok.png'
import {Link, NavLink} from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import MyBurger from '../burger/MyBurger'

function Header( {toggleTheme, theme} ) {


  return (
    <>
      <nav className='nav'>
            <div className='container_switch'>
              <Link to='/'> <img src={logo} alt = 'logo' className='logo'/></Link>
              <label className="switch">
                 <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"}/>
                <span className ="slider round"></span>
              </label>
            </div>
            <div className='nav_link'>
                <CustomLink to = '/' className = 'a'>ГЛАВНАЯ</CustomLink>
                <div className="splitList"/>
                <CustomLink to = 'news' className = 'a'>НОВОСТИ </CustomLink>
                <div className="splitList"/>
                <div className="dropdown">
                      <span className='school '>ШКОЛА<IoMdArrowDropdown/></span>
                      <div className="dropdown-content">
                           <ul className='school_list'>
                              <li ><NavLink to = 'school/abaut' className = 'arrow'> О ШКОЛЕ </NavLink></li>
                              <li><NavLink to = 'school/managements' className = 'arrow'>РУКОВОДСТВО</NavLink></li>    
                              <li> <NavLink to = 'school/coach' className = 'arrow'> ТРЕНЕРСКИЙ СОСТАВ</NavLink></li>    
                              <li> <NavLink to = 'school/workout' className = 'arrow'>РАСПИСАНИЕ ТРЕНИРОВОК</NavLink></li>    
                              <li><NavLink to = 'school/documents' className = 'arrow'>ДОКУМЕНТЫ</NavLink></li>    
                              <li><NavLink to = 'school/teams' className = 'arrow'>КОМАНДЫ</NavLink></li>    
                               <li><NavLink to = 'school/help' className = 'arrow'> НАМ ПОМОГАЮТ</NavLink></li> 
                            </ul>    
                        </div>
                 </div>
                 <div className="splitList"/>
                   <div className="dropdown">
                      <span className='school'>  МЕДИА<IoMdArrowDropdown/> </span>
                      <div className="dropdown-content">
                         <ul className='school_list'>
                            <li ><NavLink to = 'media/photo' className = 'arrow'> ФОТО </NavLink></li>
                            <li><NavLink to = 'media/video' className = 'arrow'>ВИДЕО</NavLink></li>    
                          </ul>    
                        </div>
                     </div>
                     <div className="splitList"/>
                    <CustomLink to = 'contact' className = 'a'>КОНТАКТЫ</CustomLink>
            </div>
       </nav>
       <MyBurger/>
    </>
  )
}

export default Header