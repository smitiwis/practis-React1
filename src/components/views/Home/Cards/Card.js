import React, { Component } from 'react';


class Card extends Component {
    getInfoParent= this.props.card.titulo;
    marcarFavorita = () => {
        this.props.marcar(this.getInfoParent)
    }

    render() {
        const { tema, titulo, img, fecha, autor } = this.props.card;
        return (
            <article className="articles">
                <div className="contenedor-article">
                    <div className="article-div">
                        <img className="article-div-img" src={img} alt={autor} />
                    </div>
                    <div className="div-desc-img">
                        <span>{tema}</span>
                        <p>post: {fecha}</p>
                    </div>
                    <div className="cont-texto">
                        <h5>{titulo}</h5>
                        <p>
                            Tutoriales del plugin Elementor para WordPress
                            gratis online. Aprende a crear y maquetar una página
                            web profesional de WordPress con Elementor.
                        </p>
                        <div className="favorita">
                            <button className='btn-favorita' onClick={this.marcarFavorita}>Elegir favorita</button>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default Card;