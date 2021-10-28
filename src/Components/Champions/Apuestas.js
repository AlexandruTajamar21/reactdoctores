import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../../Global';

export default class Apuestas extends Component {

    state= {
        apuestas:[]
        ,status:false
    }

    cargaApuestas = () => {
        var request = "/api/Apuestas";
        var url = Global.urlChampions + request;
        axios.get(url).then(res=>{
            this.setState({
                apuestas:res.data
                ,status:true
            })
        })
    }
    componentDidMount = () =>{
        this.cargaApuestas();
    }

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <NavLink to="/nuevaapuesta" className="btn btn-info">Nueva Apuesta</NavLink>
                <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Usuario</th>
                                <th>Resultado</th>
                                <th>Fecha</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {this.state.apuestas.map((ap,index)=>{
                                return(
                                    <tr key={index}>
                                    <th>{ap.usuario}</th>
                                    <th>{ap.resultado}</th>
                                    <th>{ap.fecha}</th>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </div>
        )
    }
}
