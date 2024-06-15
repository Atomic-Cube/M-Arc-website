import React from 'react'
import me from "./../../assets/NEW.png";
import { Puff } from 'react-loader-spinner';
import { Fade } from 'animation-react';
import { useTranslation } from 'react-i18next';
import Stayles from './../Stayles/Stayles';


const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className=" row m-0 p-0 my-5 d-flex justify-content-center align-items-center">
        <div className="col-md-8 text-white ">
          <Fade
            type="left"
            translate="200px"
            delay={0.5}
            duration={0.5}
            isRepeat={false}
          >

            <h2 className=' text-center fw-bold'>{t('about')}</h2>

            <p className='lead p-4 text-center '>{t('pargraph')}</p>

          </Fade>
        </div>
        <div className="col-md-4 position-relative mx-auto ">
          <Fade
            type="right"
            translate="200px"
            delay={0.5}
            duration={0.5}
            isRepeat={false}
          >
            <div className='w-75 mx-auto'>
            <Puff
              visible={true}
              height="350"
              width="350"
              color="#f0bc11"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            </div>
            

            <div className='w-75  position-absolute top-0 end-0 me-3'>
              <img src={me} className='w-75 rounded-pill' />


            </div>

          </Fade>
          <Fade
            type="right"
            translate="200px"
            delay={0.5}
            duration={0.5}
            isRepeat={false}
          >
            <h2 className=' main-color fs-3 fw-bold mt-2 ms-5 '>CEO:</h2>
            <h3 className='main-color fs-3 mt-2 ms-5'>Arch/Mark Sabry</h3>

          </Fade>
        </div>
      </div>

      <Stayles />

      


    </>
  )
}

export default Home