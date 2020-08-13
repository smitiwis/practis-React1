import React, { Component } from 'react';

class Formularios extends Component {
    nombre= React.createRef();
    apellido = React.createRef();
    carrera = React.createRef();
    generoMas = React.createRef();
    generoFem = React.createRef();
    obtenerDatos = (e) => {
       e.preventDefault();
       console.log(this.nombre.current.value)
       console.log(this.apellido.current.value)
       console.log(this.carrera.current.value)

    }

    render() {
        return (
            <div>
                <h1>Formularios</h1>
                <form className="formulario" onSubmit= {this.obtenerDatos}>
                    <div className="formulario-contenido">
                        <div className="formulario-div">
                            <label htmlFor="">Nombre:</label>
                            <input className="form-input" type="text" ref={this.nombre}/>
                        </div>
                        <div className="formulario-div">
                            <label htmlFor="">Apellidos:</label>
                            <input className="form-input" type="text" ref={this.apellido}/>
                        </div>
                        <div className="formulario-div">
                            <label htmlFor="">Carrera:</label>
                            <input className="form-input" type="text" ref={this.carrera}/>
                        </div>
                        <div className="formulario-div">
                            <label htmlFor="">Sexo:</label>
                            <div>
                                <label htmlFor="">Mas</label>
                                <input className="form-input" name="genero" type="radio"ref={this.generoMas} />
                            </div>
                            <div>
                                <label htmlFor="">Fem</label>
                                <input className="form-input" name="genero" type="radio" ref={this.generoFem} />
                            </div>
                        </div>
                        <div className="form-button">
                            <button type="submit">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Formularios;