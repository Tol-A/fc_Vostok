import React from 'react'
import './FooterModule.css';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import logo from '../../images/lider.jpeg'
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";


function Footer() {
  return (
    <div className='footer'>
        <div className='logo_networks'>
            <div className='background_logo_networks'>
                <AiFillInstagram/>
            </div>
            <div className='background_logo_networks'>
                <FaFacebookF/>
            </div>  
        </div>
        <div className='footer_info'>
            <div>
                <p className='footer_infoText'>НАГРАДНАЯ ПРОДУКЦИЯ</p>
                <hr  className='hr'/>
                <img src = {logo} alt = ''/>
            </div>
            <div>
                <p className='footer_infoText'>КОНТАКТНАЯ ИНФОРМАЦИЯ</p>
                <hr className='hr'/>
                <ul>
                    <li><AiTwotoneHome className='logotip'/>  Московская обл.,</li>
                    <li> г. Электросталь,</li>
                    <li> ул. Пушкина 23 а</li>
                </ul>
                <ul>
                    <p> <BsFillTelephoneFill className='logotip'/> +7 926 4214634</p>
                    <p> <IoMdMail className='logotip'/> elst_mbufootball@mosreg.ru</p>
                    <p> <ImLocation2 className='logotip'/> Посмотреть на карте</p>
                </ul>   
            </div>
        </div> 
        <div className='footer_end'>Copyright 2023 fc-vostok.ru</div>     
    </div>
  )
}

export default Footer