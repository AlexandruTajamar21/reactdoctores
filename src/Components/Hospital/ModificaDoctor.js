import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class ModificaDoctor extends Component {

    cajaid = React.createRef();
    cajaidhospital = React.createRef();
    cajaapellido = React.createRef();
    cajaespecialidad = React.createRef();
    cajaSalario = React.createRef();

    state = {
        doctor:{}
        ,status:false
    }

    cargaDoctor =()=>{
        var request = "/api/Doctores/" + this.props.iddoctor;
        var url = Global.urlCruddDoctores + request;
        axios.get(url).then(res=>{
            this.setState({
                doctor:res.data
            })
        })
    }
    componentDidMount = () =>{
        this.cargaDoctor();
    }

    modificaDoctor = (e) =>{
        e.preventDefault();
        var request = "/api/Doctores";
        var url = Global.urlCruddDoctores + request;

        var idDoctor = parseInt(this.cajaid.current.value);
        var idHospital = parseInt(this.cajaidhospital.current.value);
        var apellido = this.cajaapellido.current.value;
        var especialidad = this.cajaespecialidad.current.value;
        var salario = parseInt(this.cajaSalario.current.value);

        var doctornew = {
            idDoctor:idDoctor
            ,idHospital:idHospital
            ,apellido:apellido
            ,especialidad:especialidad
            ,salario:salario
        }

        axios.put(url,doctornew).then(res=>{
            this.setState({
                status:true
            })
        })
    }

    render() {
        if (this.state.status === true) {
            return (<Redirect to={"/doctores"}/>);
        }
        if (this.state.doctor!= null) {
            return (
                <div>
                    <h1>Datos</h1>
                        <form>
                            <div className="form-group row">
                                <label>idDoctor</label>
                                <input type="number" className="form-control" ref={this.cajaid} defaultValue={this.state.doctor.idDoctor}></input>
                            </div>
                            <div className="form-group row">
                                <label>IdHospital</label>
                                <input type="text" className="form-control" ref={this.cajaidhospital} defaultValue={this.state.doctor.idHospital}></input>
                            </div>
                            <div className="form-group row">
                                <label>Apellido</label>
                                <input type="text" className="form-control" ref={this.cajaapellido} defaultValue={this.state.doctor.apellido}></input>
                            </div>
                            <div className="form-group row">
                                <label>Especialidad</label>
                                <input type="text" className="form-control" ref={this.cajaespecialidad} defaultValue={this.state.doctor.especialidad}></input>
                            </div>
                            <div className="form-group row">
                                <label>Salario</label>
                                <input type="text" className="form-control" ref={this.cajaSalario} defaultValue={this.state.doctor.salario}></input>
                            </div>
                            <button className="btn btn-info" onClick={this.modificaDoctor} style={{margin:"5px"}}> Modificar Doctor </button>
                            <NavLink to="/doctores" className="btn btn-info" style={{margin:"5px"}}>Volver</NavLink>
                        </form>
                    
                </div>
            )
        }else if(this.state.status === false){
            return (<h1>Cargando datos</h1>);
        }
    }
}
