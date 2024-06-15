import React from 'react'
import { Link, Outlet } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t, i18n } = useTranslation();
  return (
   <>
   
   <div className=' container '>
   <h2 className='main-color fs-1  py-2 fw-bold text-center'>{t("projects")}</h2>
   <p className='lead text-white text-center'>{t("projectP")}</p>
    <div className=" my-3 d-flex justify-content-center align-items-center ">
     <span>
      <Link to="coomercial" className=''> <button className='btn btn-outline-warning fs-5 fw-semibold mx-2'> {t("commercial")}</button> </Link>
      </span>
      <span>
      <Link to="resedential"> <button className='btn btn-outline-warning fs-5 fw-semibold mx-2'> {t("residential")}</button> </Link>
      </span>
      
      <div>
      
       </div>
    </div>
    <Outlet />
   </div>
   </>
  )
}

export default Projects