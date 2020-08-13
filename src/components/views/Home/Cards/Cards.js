import React, { Component } from 'react';
import Card from './Card';

// IMPORTACION DE IMAGENES
import Imagen0 from '../../../../assets/img/imagen0.png';
import Imagen1 from '../../../../assets/img/imagen1.png';
import Imagen2 from '../../../../assets/img/imagen2.jpg';
import Imagen3 from '../../../../assets/img/imagen3.jpg';
import Imagen4 from '../../../../assets/img/imagen4.png';
import Imagen5 from '../../../../assets/img/imagen5.png';

class Cards extends Component {
    state = {
        cards: [
            { tema: 'Feliz cumple', titulo: 'Feliz cumple amigo', img: Imagen0, fecha: '15/05/2020', autor: '#smiti' },
            { tema: 'Feliz cumple', titulo: 'Feliz cumple amiga', img: Imagen1, fecha: '23/07/2015', autor: '#smiti' },
            { tema: 'Feliz cumple', titulo: 'Feliz cumple hermana', img: Imagen2, fecha: '02/09/2010', autor: '#smiti' },
            { tema: 'Feliz cumple', titulo: 'Feliz cumple hermano', img: Imagen3, fecha: '08/10/1995', autor: '#smiti' },
            { tema: 'Feliz cumple', titulo: 'Feliz cumple amor', img: Imagen4, fecha: '07/03/1991', autor: '#smiti' },
            { tema: 'Feliz cumple', titulo: 'Feliz cumple mamá', img: Imagen5, fecha: '01/12/2019', autor: '#smiti' },
        ],
        favorita: '',
    }
    checkCardFavortita = (info) => {
        this.setState({
            favorita: info,
        })
    }
    render() {
        return (
            <div className="content-cards">
                <h1 className="cards-h1">Contenido de feliz Cumpleaños</h1>
                <div className="card-favorita">
                    <p>Mi card favorita es <span>{this.state.favorita}</span></p>
                </div>
                <div className="cards-div">
                    {
                        this.state.cards.map((card, i) => {
                            return (
                                <div key={i} className="card-content">
                                    <Card
                                        card={card}
                                        marcar={this.checkCardFavortita}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Cards;