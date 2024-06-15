import React from 'react'

import Entrance1 from '../Entrance1/Entrance1';
import Entrance2 from '../Entrance2/Entrance2';
import Block from './../Block/Block';
import { useTranslation } from 'react-i18next';
import Sample from '../Sample/Sample';

const Resedential = () => {
  const { t, i18n } = useTranslation();
  return (
   
     <>
    
     <h2 className='main-color fs-1  py-2 fw-bold text-center'>{t("residential")}</h2>
     
     <div className=" container">
      <Sample/>
     <Block/>
      <Entrance2/>
      <Entrance1/>
     </div>
     
     
     </>
  )
}

export default Resedential