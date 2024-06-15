import React, { useRef } from 'react'
import { Fade } from 'animation-react';
import Images from "../../images.js"
import { useTranslation } from 'react-i18next';




const Sample = () => {

    const { t, i18n } = useTranslation();

    return (
        <>
            <Fade
                type="right"
                translate="200px"
                delay={1}
                duration={1}
                isRepeat={false}
            >
                <div className="row border-top border-bottom border-2 border-warning py-2 rounded-3 m-3">

                    <div className="col-md-6 rounded-3 border-start border-2 border-warning ">

                        <div className=" mx-auto w-75">

                            <video width="80%" className='rounded-3 border border-2 border-warning lg-' controls>
                                <source src="/video/sample.mp4" type="video/mp4" />

                            </video>
                        </div>
                    </div>

                    <div className="col-md-6 rounded-3 border-end border-2 border-warning text-center pe-5 ">
                        
                        <h3 className='main-color mt-5 pt-5' > {t("sampleT")}</h3>
                      
                        <p className='lead text-white'>{t("sampleP")}</p>


                    </div>




                </div>
            </Fade>

        </>
    )
}

export default Sample