import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../../assets/IMG-20220114-WA0136.png"

import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
     

      <nav className="navbar navbar-expand-lg bg-dark bg-opacity-50 px-0 py-3">
        <div className="container p-0  ">
          <Link className="navbar-brand main-color fw-smibold ms-2" to={'/home'}>
            <img height={'80px'} className='' src={logo} />
            <span className='fs-3 ' > <span className='fw-bolder fs-1'>M</span> ARC</span>

          </Link>
          <button className="navbar-toggler border border-2 rounded-3 border-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon main-color" />
          </button>
          <div className="collapse navbar-collapse text-white  w-100 " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto fs-5 ">
              <li className="nav-item">

                <Link className="nav-link text-white px-4" to="/home"> <i className="fa-solid fa-house-chimney main-color me-1" />
                  {t('home')}</Link>
              </li>
              <li className="nav-item">

                <Link className="nav-link text-white px-4" to="/projects"> <i className="fa-solid fa-building-wheat main-color me-1"></i> {t('projects')}</Link>
              </li>
              <li className="nav-item">

                <Link className="nav-link text-white px-4" to="/contact"> <i className="fa-solid fa-square-phone main-color me-1"></i> {t('Contact')}</Link>
              </li>
              <li>
                <div className="row pt-2 ms-2">
                  <div className="col-3 border border-2 border-warning rounded-pill d-flex justify-content-center align-items-center">
                    <a target='_blank' href="https://www.facebook.com/Designly95?mibextid=LQQJ4d"><i className="fa-brands fa-facebook-f main-color "></i></a>
                  </div>
                  <div className="col-3 ms-2 border border-2 border-warning rounded-pill d-flex justify-content-center align-items-center">
                    <a target='_blank' href="https://www.instagram.com/m.arcitect?igsh=MThoMmd5eHBxbTZsYw=="><i className="fa-brands fa-instagram main-color "></i></a>
                  </div>
                  <div className="col-3 ms-2 border border-2 border-warning rounded-pill d-flex justify-content-center align-items-center">
                    <a target='_blank' href="https://wa.me/+201030065440?text=more-details"><i className="fa-brands fa-whatsapp main-color "></i></a>
                  </div>
                </div>
              </li>

            </ul>
          </div>
          <div>
            {i18n.language == "en" && <button onClick={() => { i18n.changeLanguage("ar"); }
            } className='btn btn-outline-warning m-2'> Arabic</button>}
            {i18n.language == "ar" && <button onClick={() => { i18n.changeLanguage("en"); }
            } className='btn btn-outline-warning m-2'> English</button>}
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavBar