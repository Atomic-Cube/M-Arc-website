import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './components/LayOut/LayOut';
import Home from './components/Home/Home';

import Projects from './components/Projects/Projects';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Coomercial from './components/Coomercial/Coomercial';
import Resedential from './components/Resedential/Resedential';


function App() {
  let routes=createBrowserRouter([
    { path:"",element:<LayOut />,children:[
      {index:true,element:<Home />},
      {path:"home",element:<Home />},
      {path:"contact",element:<Contact />},
      {path:"projects",element:<Projects /> ,children:[
        {path:"coomercial",element:<Coomercial/>},
        {path:"resedential",element:<Resedential/>},
      ]},
    
     
  
      {path:"*",element:<NotFound />},
  
    ]}
  ])
  


  return (
    <>
        <RouterProvider router={routes}/>
    </>
  )
}

export default App
