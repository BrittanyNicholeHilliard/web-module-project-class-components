import React from 'react'
import TodoList from './TodoList.js';
import Form from './Form.js'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Get Ripped',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          task: 'Water Plants',
          id: 1528817084358,
          completed: false
        },
        {
          task: '???',
          id: 1528817084357,
          completed: false 
        }
      ]
    }
  }
  
  handleAdd = (task) => {
    const newTodo = {
      task: task, 
      id: Date.now(), 
      completed: false
    }

    this.setState({
      ...this.state, 
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    })
  }

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
          return {
          ...todo,
          completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

  render() {

     const {todos} = this.state;
    return (
      <div>
        <h1>Unit 3 Sprint 1 Module 1</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos}/>
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  }
}
