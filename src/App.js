import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import './App.css';

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';
import Aseguradoras from './components/Aseguradoras';

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

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: newTasks});
  }

  checkDone = () => {}

  render() {
    return <div>
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/aseguradoras">Aseguradoras</Link></li>
        </ul>
        <Route exact path="/" render={() => {
          return <div>
            <h1>Home</h1>
            <TaskForm addTask={this.addTask} />
            <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Posts}>
        </Route>
        <Route path="/aseguradoras" component={Aseguradoras}>
        </Route>
      </BrowserRouter>
    </div>
  }
}

export default App;
