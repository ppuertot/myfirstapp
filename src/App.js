import React from 'react';
import './App.css';

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends React.Component {

  state = {
    tasks: tasks
  }

  render() {
    return <h1>
      <TaskForm/>
      <Tasks tasks={this.state.tasks} />
    </h1>;
  }
}

export default App;
