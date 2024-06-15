import React, { Component } from 'react'

import Crazy from '../Crazy/Crazy';
import Tree from '../Tree/Tree';
import Restaurant from '../Restaurant/Restaurant';
import { useTranslation } from 'react-i18next';



const Coomercial = () => {


  const { t, i18n } = useTranslation();
  return (
    <>

      <h2 className='main-color fs-1  py-2 fw-bold text-center'>{t("commercial")}</h2>


      <div className="container">


        <Crazy />
        <Tree/>
        <Restaurant/>
      </div>


    </>)
}

export default Coomercial