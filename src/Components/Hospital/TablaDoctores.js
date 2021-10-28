import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class TablaHospitales extends Component {

    state = {
        doctores:[]
        ,status:false
    }

    cargaDoctores = () =>{
        var request = "/api/Doctores";
        var url = Global.urlCruddDoctores + request;
        
        axios.get(url).then(res=>{
            this.setState({
                doctores:res.data
                , status:true
            })
        })
    }
    componentDidMount = () =>{
        this.cargaDoctores();
    }
    borraDoctor = (numero) =>{
        var request = "/api/Doctores/" + parseInt(numero);
        var url = Global.urlCruddDoctores + request;
        axios.delete(url).then(res=>{
            this.cargaDoctores();
        })
    }

    render() {
        return (
            <div>
                <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>idDoctor</th>
                                <th>idHospital</th>
                                <th>Apellido</th>
                                <th>Especialidad</th>
                                <th>Salario</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {this.state.doctores.map((doc,index)=>{
                                return(
                                    <tr key={index}>
                                    <th>{doc.idDoctor}</th>
                                    <th>{doc.idHospital}</th>
                                    <th>{doc.apellido}</th>
                                    <th>{doc.especialidad}</th>
                                    <th>{doc.salario}</th>
                                    <th style={{width:"5%"}}><NavLink to={"/detallesdoctor/" + doc.idDoctor} className="btn btn-info"> Detalles</NavLink></th>
                                    <th style={{width:"5%"}}><NavLink to={"/modificadoctor/" + doc.idDoctor} className="btn btn-info"> Modifica</NavLink></th>
                                    <th style={{width:"5%"}}><button onClick={()=> this.borraDoctor(doc.idDoctor)} className="btn" style={{backgroundColor:"red"}}>Borrar</button></th>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </div>
        )
    }
}
