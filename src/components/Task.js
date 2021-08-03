import React, { Component } from 'react';

class Task extends Component {
    render() {
        const {task} = this.props;
        return <div>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <button onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
        </div>;
    }
}

export default Task;