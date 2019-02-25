import React, { Component } from 'react';
import './style.css';
import styled from 'styled-components';

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  color: white;
  background-color: #070f85;
  font-size: 32px;
  outline: none!important;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

class AddTask extends Component {
  state = {
    task: ''
  }

  handleChange = event => {
    this.setState({
      task: event.target.value
    })
  };

  handleSubmit = () => {
    this.setState({
      task: ""
    });
    
    if (this.state.task !== '') {
      this.props.onSubmit({
        task: this.state.task
      });
    }
  };

  render() {
    return (
      <div className="input-addTask mb-4">
        <input
          type="text"
          placeholder="Add new task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleSubmit}>+</Button>
      </div>
    )
  }
}

export default AddTask;