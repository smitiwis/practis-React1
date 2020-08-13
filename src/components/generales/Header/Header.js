import React, { Component } from 'react';
import logo from '../../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="div-logo">
          <img className="logo App-logo" src={logo} alt="logo" />
          <h2>Andreu fafulin.com</h2>
        </div>
        <nav className="div-nav">
          <ul className="nav-ul">
            <li><NavLink to="/home" activeClassName="actived">Home</NavLink></li>
            <li><NavLink to="/nosotros" activeClassName="actived">Nosotros</NavLink></li>
            <li><NavLink to="/contacto" activeClassName="actived">Contacto</NavLink></li>
            <li><NavLink to="/formulario" activeClassName="actived">Formulario</NavLink></li>
            <li><NavLink to="intranet" activeClassName="actived">intranet</NavLink></li>
          </ul>
        </nav>
      </header>
   
    )
  }
}

export default Header;
