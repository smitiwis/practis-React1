import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//componentes Generales
import Header from './components/generales/Header/Header';
import Footer from './components/generales/Footer/Footer';
import Aside from './components/generales/Aside/Aside';
import Error from './components/views/Error/Error';
import Carrusel from './components/generales/Carrusel/Carrusel'
// Componentes de vistas
import Home from "./components/views/Home/Home";
import Nosotros from './components/views/Nosotros/Nosotros';
import Contactos from './components/views/Contactos/Contactos';
import Historias from './components/views/Historias/Historias';
import Intranet from './components/views/Intranet/Intranet';
import Formularios from './components/views/Formularios/Formularios';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* escribimos los componenetes que no estan en la rutas
                    asi como el Header y el Footer  */}
                <Header />
                <Carrusel />
                <div className="cuerpo-page">
                    <div className="cuerpo">
                        <Switch>
                            {/* Configuracion de rutas */}
                            <Route exact path='/home' component={Home} />
                            <Route exact path='/' component={Home} />
                            <Route exact path='/nosotros' component={Nosotros} />
                            <Route exact path='/contacto' component={Contactos} />
                            <Route exact path='/historia' component={Historias} />
                            <Route exact path='/intranet' component={Intranet} />
                            <Route exact path='/formulario' component={Formularios} />
                            <Route component={Error} />
                            <Route exact path="/nuevo" render={() => {
                                return (
                                    <h1>Este es la runa nueva</h1>
                                );
                            }} />
                        </Switch>
                    </div>
                    <div className="aside">
                        <Aside />
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;