import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../../Global';

export default class DetallesJugador extends Component {

    state  ={
        jugador:{}
        ,status: false
    }

    cargaJugador = () =>{
        var request = "/api/Jugadores/" + this.props.idjugador;
        var url = Global.urlChampions + request;

        axios.get(url).then(res =>{
            this.setState({
                jugador:res.data
            })
        })
    }

    componentDidMount = () =>{
        this.cargaJugador();
    }

    render() {
        return (
            <div className="container text-center">
                <h1>{this.state.jugador.nombre}</h1>
                <h2><img src={this.state.jugador.imagen} alt="jugador"></img></h2>
                <h2>{this.state.jugador.posicion}</h2>
                <h2>{this.state.jugador.fechaNacimiento}</h2>
                <h2>Pais: {this.state.jugador.pais}</h2>
                <a><NavLink to={"/jugadores/" + this.state.jugador.idEquipo} className="btn btn-info"> Jugadores</NavLink></a>
            </div>
        )
    }
}
