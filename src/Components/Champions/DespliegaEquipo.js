import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class DespliegaEquipo extends Component {


    state = {
        equipo : {}
        ,status:false
    }

    cargaEquipo = () =>{
        var request = "/api/Equipos/" + this.props.idequipo;
        var url = Global.urlChampions + request;

        axios.get(url).then(res=>{
            this.setState({
                equipo:res.data
            })
        })
    }

    componentDidMount = () =>{
        this.cargaEquipo();
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):if (this.props.userID !== prevProps.userID) {
            if (prevProps.idequipo !== this.props.idequipo) {
                this.cargaEquipo();
            }
          
    }
    render() {
        return (
            <div className="container text-center">
                <h1>{this.state.equipo.nombre}</h1>
                <img src={this.state.equipo.imagen} style={{width:"200px",height:"200px"}}></img>
                <h2>Champions: {this.state.equipo.champions}</h2>
                <p>{this.state.equipo.descripcion}</p>
                <a href={this.state.equipo.paginaWeb}>{this.state.equipo.paginaWeb}</a> <br/>
                <button className="btn-info"><NavLink to={"/jugadores/" + this.state.equipo.idEquipo} className="btn btn-info"> Jugadores</NavLink></button>
            </div>
        )
    }
}
