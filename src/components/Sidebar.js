import logo from "../Logo-corralon.png";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const afterClick = () => {
    const menuDashboard = document.querySelector(".menu-dashboard");
    menuDashboard.classList.toggle("open");
  };

  return (
    <>
      <div>
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
      </div>
      <div>
        <div className="contenedor">
          <div className="menu-dashboard">
            {/* TOP MENU */}
            <div className="top-menu">
              <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
                <span>Corralon Sanchez</span>
              </div>
              <div className="toggle">
                <i className="bx bx-menu" onClick={afterClick}></i>
              </div>
            </div>
            {/* INPUT SEARCH */}
            <div className="input-search">
              <i className="bx bx-search"></i>
              <input type="text" className="input" placeholder="Buscar"></input>
            </div>
            {/* MENU */}
            <div className="menu">
              <NavLink to="/">
                <div className="enlace" onClick={afterClick}>
                  <i className="bx bx-line-chart"></i>
                  <span>Analiticas</span>
                </div>
              </NavLink>
              <NavLink to="/users">
                <div className="enlace" onClick={afterClick}>
                  <i className="bx bx-user"></i>
                  <span>Usuarios</span>
                </div>
              </NavLink>
              <NavLink to="/products">
                <div className="enlace" onClick={afterClick}>
                  <i className="bx bx-package"></i>
                  <span>Productos</span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
