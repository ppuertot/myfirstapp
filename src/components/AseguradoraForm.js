import React, { Component } from 'react';

class AseguradoraForm extends Component {

    state = {
        nombre: '',
        telefono: ''
    }

    onSubmit = (e) => {
        const aseguradora = {nombre: this.state.nombre, telefono: this.state.telefono};
        this.props.addAseguradora(aseguradora);
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
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