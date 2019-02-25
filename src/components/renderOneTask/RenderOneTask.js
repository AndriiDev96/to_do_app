import React, { Component } from 'react';
import './style.css';
import EditTask from '../editTask/EditTask';

class RenderOneTask extends Component {
  state = {
    dateAndTime: ''
  }

  componentDidMount() {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    this.setState({
      dateAndTime: `Date: ${date}.${month}.${year} Time: ${hours}.${minutes}.${seconds}`
    })
  }

  render() {
    const markComplTaks={
      textDecoration: this.props.statusTask ? 'line-through' : void(0),
      color: this.props.statusTask ? '#818181' : '#212529'
    } 

    return (
      <div className="task">
        <div className="mark-task" onClick={this.props.complete}>  
          {
            this.props.statusTask ?
              <img className="status-active" src={process.env.PUBLIC_URL + '/img/check_mark/active.png'} alt="img" />
              :
              <img className="status-unActive" src={process.env.PUBLIC_URL + '/img/check_mark/noActive.png'} alt="img" />
          }
        </div>
        <p className="task-text" style={markComplTaks}>
          {this.props.task} <br />
            <span className="data-and-time">
              {this.state.dateAndTime}
            </span>
        </p>

        <EditTask onSubmit={this.props.editTask}/>

        <button
          className="btn-belete"
          onClick={this.props.deleteTask}>
          Delete
        </button>
      </div>
    );
  }
}

export default RenderOneTask;