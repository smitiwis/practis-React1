import React, { Component } from 'react';
import Cargar from '../../../assets/img/cargar3.gif';
import axios from 'axios';

class Contactos extends Component {

    state = {
        Global: {},
        Countries: [],
        Date: "",
        Estado: null

    }
    componentWillMount() {
        this.getInfo()
    }
    getInfo = () => {
        axios.get("https://api.covid19api.com/summary")
            .then((res) => {
                this.setState({
                    Countries: res.data.Countries,
                    Global: res.data.Global,
                    Date: res.data.Date,
                    Estado: "success"
                });
                console.log(this.state)
            });
    }


    render() {
        if (this.state.Countries.length > 0) {
            return (
                <div>
                    <h1>App del covid</h1>
                    <div className="covid">
                        {this.state.Countries.map((pais, i) => {
                            return (

                                <div key={i} className="appi-covid">
                                    <div>
                                        <h1>{pais.Country}</h1>
                                        <h3>Nuevos Casos</h3>
                                        <p>Confirmados: {pais.NewConfirmed}</p>
                                        <p>Fallecidos: {pais.NewDeaths}</p>
                                        <p>Curados: {pais.NewRecovered}</p>
                                    </div>
                                    <div>
                                        <h3>Casos Totales</h3>
                                        <p>Confirmados: {pais.TotalConfirmed}</p>
                                        <p>Fallecidos: {pais.TotalDeaths}</p>
                                        <p>Curados: {pais.TotalRecovered}</p>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
            );
        } else if (this.state.Countries.length === 0 && this.state.Estado === "success") {
            return (
                // Esto es como que se modifico la propiedad Estado pero nunca se cargo la informacion
                <div>No hay contenindo que mostar</div>
            );
        } else {
            return (
                // Esta imagen aparecá mientras se carguen los datos
                // ya que lo que esta dentro de render se ejecuta constantemente
                <img src={Cargar} alt="" />
            );
        }
    }
}

export default Contactos;