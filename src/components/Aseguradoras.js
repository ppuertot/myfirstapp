import React, { Component } from 'react';
import {headers, url} from '../headers';
import AseguradoraForm from './AseguradoraForm';

export default class Aseguradoras extends Component {

    state = {
        aseguradoras: []
    }

    async componentDidMount() {
        const res = await fetch(url + '/api/aseguradoras/', { headers:headers });
        const data = await res.json();
        this.setState({aseguradoras:data});
    }

    async addAseguradora(aseguradora) {
        const res1 = await fetch(url + '/api/aseguradoras/', { 
            method: 'POST', 
            headers: headers, 
            body: JSON.stringify(aseguradora)
        })
        console.log(res1.status);
        if (res1.status === 201) {
            const res2 = await fetch(url + '/api/aseguradoras/', { headers:headers });
            let aseguradoras = await res2.json();
            this.setState({aseguradoras:aseguradoras});
        }
    }

    render() {
        return (
        <div>
            <h1>Aseguradoras</h1>
            <AseguradoraForm addAseguradora={this.addAseguradora.bind(this)} />
            <ul>
            {
                this.state.aseguradoras.map(aseguradora => {
                    return <li key={aseguradora.id}>{aseguradora.nombre} - {aseguradora.telefono}</li>
                })
            }
            </ul>
        </div>
        )
    }
}