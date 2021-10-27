import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../../Global';

export default class DetallesDoctor extends Component {

    state = {
        doctor: {}
        ,status: false
    }

    cargaDoctor =()=>{
        var request = "/api/Doctores/" + this.props.iddoctor;
        var url = Global.urlCruddDoctores + request;
        axios.get(url).then(res=>{
            this.setState({
                doctor:res.data
                ,status:true
            })
        })
    }
    componentDidMount = () =>{
        this.cargaDoctor();
    }

    render() {
        return (
            <div>
                <table className="table table-bordered table-striped">
                    <thead className="table ">
                        <tr>
                            <th>idDoctor</th>
                            <th>idHospital</th>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Salario</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {this.state.doctor.idDoctor}
                            </td>
                            <td>
                                {this.state.doctor.idHospital}
                            </td>
                            <td>
                                {this.state.doctor.apellido}
                            </td>
                            <td>
                                {this.state.doctor.especialidad}
                            </td>
                            <td>
                                {this.state.doctor.salario}
                            </td>
                            <td style={{width:"10%"}}>
                                <NavLink to="/doctores" className="btn btn-dark"> Volver</NavLink>
                            </td>
                            <td style={{width:"10%"}}>
                                <NavLink to={"/modificadoctor/" + this.state.doctor.idDoctor} className="btn btn-dark"> Modificar</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
