import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuPrincipal = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <a href="/">
                    <img className="main-logo" src="https://ed.team/static/images/logo/logo.svg" alt="logo" />
                </a>
            </div>

            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li> <NavLink to="/" exact activeClassName="activo">Inicio </NavLink></li>
                        <li><NavLink to="/cursos" activeClassName="activo"> Cursos </NavLink></li>
                        <li><NavLink to="/formulario" activeClassName="activo"> Formulario </NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

)

export default MenuPrincipal;