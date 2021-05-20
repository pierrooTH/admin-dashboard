import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  state = {
    todos: []
  }
  getTodo = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      console.log(res.data)
      this.setState({
        todos: res.data
      })
    })
  }
  render() {
    const listTodos = this.state.todos.map(todo => {
      return <li>{todo.title}</li>
    })
    return (
      <div className="app">
        <button onClick={this.getTodo}>Clique</button>

        <ul>
          {listTodos}
        </ul>
      </div>
    )
  }
}

