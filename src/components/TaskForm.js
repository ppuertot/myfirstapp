import React, { Component } from 'react';

class TaskForm extends Component {

    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
        <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="write a Task" />
            <br/>
            <textarea placeholder="write a description"></textarea>
            <br/>
            <input type="submit" />
        </form>
        )
    }
}

export default TaskForm;