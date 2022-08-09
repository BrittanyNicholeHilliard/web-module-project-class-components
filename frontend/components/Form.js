
import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state, 
      input: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    console.log('submit')
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}> Add </button>
      </div>
    )
  }
}
