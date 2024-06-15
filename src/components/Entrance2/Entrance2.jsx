import React, { useRef } from 'react'
import { Fade } from 'animation-react';
import Slider from "react-slick";

import Mad5al2 from "../../Mad5al2.js"
import { useTranslation } from 'react-i18next';

const Entrance2 = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const { t, i18n } = useTranslation();
  return (
    <>
     <Fade 
        type="left"
        translate="200px"
        delay={1}
        duration={1}
        isRepeat={false}
      > 
     <div className="row border-top border-bottom border-2 border-warning py-2 rounded-3 m-3">

    
      

     <div className="col-md-8 rounded-3 border-start border-2 border-warning p-4">

     <div className="slider-container">
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
      <video width="100%" controls>
        <source src="/video/res.mp4" type="video/mp4" />
      
      </video>
   {
     Mad5al2.map((item)=>
      <div key={item.id}>
        <img src={item.image} className='w-100  '/>
      </div>
  
      )
    }
       
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="btn btn-outline-warning mt-2 me-2" onClick={previous}>
          Previous
        </button>
        <button className="btn btn-outline-warning mt-2" onClick={next}>
          Next
        </button>
      </div>
    </div>

      
        
      </div>

      <div className="col-md-4 rounded-3 border-end border-2 border-warning text-center">
        <h3 className='main-color' >{t("resTit")}</h3>
        <p className='lead text-white'>{t("entrance2")}</p>
      </div>
    
     </div>
     </Fade>
    
    </>
  )
}

export default Entrance2