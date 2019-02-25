import React, { Component } from 'react';
import RenderOneTask from '../renderOneTask/RenderOneTask';
import AddTask from '../addTask/AddTask';

class RenderTaks extends Component {

  state = {
    listTasks: [
      {
        'task': 'To buy a car.',
        status: false
      },
      {
        'task': 'Read a book.',
        status: true
      },
    ],
    task: '',
  }

  addNewTask = (task) => {
    this.setState(({ listTasks }) => ({
      listTasks: [...listTasks, task]
    }));
  };

  editTask = (indexTask, changedTask) => {
    this.setState(state => ({
      listTasks: state.listTasks.map((task, index) =>
        index === indexTask ? { task: changedTask.task, status: task.status }
        : task
      )
    }));
  };

  completeTask = (indexTask) => {
    this.setState(state => ({
      listTasks: state.listTasks.map((task, index) =>
        index === indexTask ? { ...task, status: !task.status }
        : task
      )
    }));
  };

  deleteTask = (indexTask) => {
    this.setState(state => ({
      listTasks: state.listTasks.filter((task, index) => index !== indexTask)
    }));
  };

  render() {

    let countTasks = <div className="number-of-tasks mb-2">Tasks: {this.state.listTasks.length}</div>

    return (
      <div>
        <AddTask onSubmit={this.addNewTask} />

        {countTasks}

        <div className="class-list">
          {this.state.listTasks.map((taskFromList, index) => {
            return <RenderOneTask
              key={index}
              task={taskFromList.task}
              complete={this.completeTask.bind(this, index)}
              statusTask={taskFromList.status}
              deleteTask={this.deleteTask.bind(this, index)}
              editTask={this.editTask.bind(this, index)}
            />
          })}
        </div>
      </div>
    );
  }
}

export default RenderTaks;
