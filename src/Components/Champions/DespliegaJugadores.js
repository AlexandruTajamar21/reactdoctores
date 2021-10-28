import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../../Global';

export default class DespliegaJugadores extends Component {
    state  ={
        jugadores:[]
        ,status: false
    }

    cargaJugadores = () =>{
        var request = "/api/Jugadores/JugadoresEquipo/" + this.props.idequipo;
        var url = Global.urlChampions + request;

        axios.get(url).then(res =>{
            this.setState({
                jugadores:res.data
            })
        })
    }

    componentDidMount = () =>{
        this.cargaJugadores();
    }

    render() {
        return (
            <div className="App">
                <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Imagen</th>
                                <th>Detalles</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {this.state.jugadores.map((jug,index)=>{
                                return(
                                    <tr key={index}>
                                        <th>{jug.nombre}</th>
                                        <th><img src={jug.imagen}></img></th>
                                        <th style={{width:"5%"}}><NavLink to={"/detallesJugador/" + jug.idJugador} className="btn btn-info"> Detalles</NavLink></th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </div>
        )
    }
}
