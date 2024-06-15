import React from 'react'
import styles from "./Footer.module.css"
import logo from "./../../assets/IMG-20220114-WA0136.png"

const Footer = () => {
  return (
    <>
    <div className='bg-dark bg-opacity-50 py-4  w-100'>
      <div className="row w-100">
        <div className="col-4  d-flex justify-content-center align-items-center">
          <div className=' text-center'>
            <img src={logo} className='w-25'/>.
            <h3 className='fw-smibold main-color'> M ARC</h3>
          </div>
        </div>
        <div className="col-8 text-center">
          <p className=' text-white fs-5 fw-semibold'><span><i class="fa-solid fa-location-dot main-color me-2"></i></span> Alex ,Cairo and Alamin</p>
          <p className=' text-white fs-5 fw-semibold'><span><i class="fa-solid fa-envelope main-color me-2"></i></span>marksabry7395@gmail.com </p>
          <p className=' text-white fs-5 fw-semibold'><span><i class="fa-solid fa-phone main-color me-2"></i></span> +201030065440 //+201277277230</p>
        </div>
      </div>
      

    </div>
    </>
  )
}

export default Footer