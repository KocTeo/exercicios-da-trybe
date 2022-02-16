import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['tarefa1', 'tarefa2', 'tarefa3'];

class App extends Component {
  render() {
    return (
      <ul>
        { tarefas.map((tarefa) => Task(tarefa)) }
      </ul>
    );
  }
}

export default App;
