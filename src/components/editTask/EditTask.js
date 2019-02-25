import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './style.css';
import styled from 'styled-components';

const ButtonEdit = styled.button`
  position: absolute;
  right: 70px;
  background: none;
  border: none;
  outline: none!important;

  @media screen and (max-width: 500px) {
    right: 55px;
  }
`;

class EditTask extends Component{

  state = {
    show: false,
    task: ''
  }

  stateModalWindow = () => {
    this.setState({
      show: !this.state.show
    })
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
    this.stateModalWindow();
  }

  render(){  
    return(
      <>      
        <ButtonEdit onClick={this.stateModalWindow}>
          <img 
            src={process.env.PUBLIC_URL + '/img/edit_button/edit.png'} 
            alt="edit"
            className="button-edit"
            />
        </ButtonEdit>

        <Modal 
          show={this.state.show} 
          onHide={this.stateModalWindow} 
          centered>

        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5 className="mb-4 mt-2">Write short and understandable.</h5>
          <textarea 
            name="text"
            rows="1"
            placeholder="Click here"
            value={this.state.task}
            onChange={this.handleChange}>
          </textarea>
        </Modal.Body>      

        <Modal.Footer>
          <button className="btn-cancel" onClick={this.stateModalWindow}>Cancel</button>
          <button className="btn-save" onClick={this.handleSubmit}>Save</button>
        </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default EditTask;