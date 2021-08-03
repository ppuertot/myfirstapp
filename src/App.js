import React from 'react';
import './App.css';

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends React.Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    console.log(title, description)
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  render() {
    return <h1>
      <TaskForm addTask={this.addTask} />
      <Tasks tasks={this.state.tasks} />
    </h1>;
  }
}

export default App;
