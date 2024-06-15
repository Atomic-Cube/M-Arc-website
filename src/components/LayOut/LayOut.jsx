import React from 'react'
import NavBar from './../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';

const LayOut = () => {
  return (
    <div className='bg-image bg-opacity-25 w-100'>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default LayOut