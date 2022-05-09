import React from 'react';
import Home from '../components/Home';
import Sidebar from '../components/Sidebar';

import "./estilos.css";

function Homes() {



  return (
    <>
      <body>
        <div className="contenedor">
          <Sidebar />
          <Home />
        </div>
      </body>
    </>
  )
}

export default Homes