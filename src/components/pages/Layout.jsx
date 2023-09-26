import React from 'react'
import {Outlet} from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import Footer from '../pageСomponents/footer/Footer'
import Header from '../pageСomponents/header/Header'


function Layout() {
  const {theme, setTheme} = useTheme()

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
    
  return (
    <div className="wrapper" id = {theme}>
      <header><Header toggleTheme = {toggleTheme} theme = {theme}/> </header>
      <main><Outlet/></main>
      <footer> <Footer/> </footer>
    </div>
  )
}

export default Layout