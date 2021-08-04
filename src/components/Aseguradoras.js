import React, { Component } from 'react';
import {headers, url} from '../headers';

export default class Aseguradoras extends Component {

    state = {
        aseguradoras: []
    }

    async componentDidMount() {
        const res = await fetch(url + '/api/aseguradoras/', { headers:headers });
        const data = await res.json();
        this.setState({aseguradoras:data});
    }

    render() {
        return (
        <div>
            <h1>Aseguradoras</h1>
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