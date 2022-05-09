import React from 'react';
import Home from '../components/Home';
import logo from '../Logo-corralon.png';
import "./estilos.css";

function Homes() {

  const afterClick = () => {
    const menuDashboard = document.querySelector(".menu-dashboard")
    menuDashboard.classList.toggle("open")
  }



  return (
    <>

      <head>
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body>
        <div className="menu-dashboard">
          {/* TOP MENU */}
          <div className="top-menu">
            <div className="logo">
              <img src={logo} className="App-logo" alt="logo" />
              <span>Corralon Sanchez</span>
            </div>
            <div className="toggle">
              <i class='bx bx-menu' onClick={afterClick}></i>
            </div>
          </div>
          {/* INPUT SEARCH */}
          <div className="input-search">
            <i class='bx bx-search'  ></i>
            <input type="text" className="input" placeholder='Buscar'></input>
          </div>
          {/* MENU */}
          <div className="menu">

            <div className="enlace" onClick={afterClick}>
              <i className="bx bx-line-chart" ></i>
              <span>Analiticas</span>
            </div>

            <div className="enlace" onClick={afterClick}>
              <i className="bx bx-user" ></i>
              <span>Usuarios</span>
            </div>

            <div className="enlace" onClick={afterClick}>
              <i className="bx bx-package" ></i>
              <span>Productos</span>
            </div>

          </div>
        </div>


      </body>
      <Home />
    </>
  )
}

export default Homes