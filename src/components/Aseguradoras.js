import React, { Component } from 'react';
import {headers, url} from '../headers';
import AseguradoraForm from './AseguradoraForm';

export default class Aseguradoras extends Component {

    state = {
        aseguradoras: []
    }

    componentDidMount() {
        this.reload();
    }

    reload = async () => {
        const res = await fetch(url + '/api/aseguradoras/', { headers:headers });
        const data = await res.json();
        this.setState({aseguradoras:data});
    }

    render() {
        return (
        <div>
            <h1>Aseguradoras</h1>
            <AseguradoraForm reload={this.reload} />
            <ul>
            {
                this.state.aseguradoras.map(aseguradora => {
                    return <li key={aseguradora.id}>{aseguradora.nombre} - {aseguradora.telefono}</li>
                })
            }
            </ul>
            <select>
                {
                    this.state.aseguradoras.map(aseguradora => {
                        return <option key={aseguradora.id} value={aseguradora.id}>{aseguradora.nombre}</option>
                    })
                }            
            </select> 
        </div>
        )
    }
}