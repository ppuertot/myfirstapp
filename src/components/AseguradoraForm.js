import React, { Component } from 'react';
import {headers, url} from '../headers';

class AseguradoraForm extends Component {

    state = {
        nombre: '',
        telefono: ''
    }

    onSubmit = e => {
        const aseguradora = {nombre: this.state.nombre, telefono: this.state.telefono};
        this.addAseguradora(aseguradora);
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addAseguradora = async (aseguradora) => {
        const res = await fetch(url + '/api/aseguradoras/', { 
            method: 'POST', 
            headers: headers, 
            body: JSON.stringify(aseguradora)
        })
        if (res.status === 201) {
            this.props.reload();
        }
    }

    render() {
        return (
        <form onSubmit={this.onSubmit}>
            <input 
                type="text" 
                name="nombre"
                placeholder="Nombre" 
                onChange={this.onChange} 
                value={this.state.nombre} />
            <br/>
            <input 
                type="text" 
                name="telefono"
                placeholder="Teléfono" 
                onChange={this.onChange} 
                value={this.state.telefono} />
            <br/>
            <input type="submit" />
        </form>
        )
    }
}

export default AseguradoraForm;