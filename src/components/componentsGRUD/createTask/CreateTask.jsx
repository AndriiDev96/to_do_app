import React, { Component } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon } from "mdbreact";
import DatePicker from '../../datePicker/DataPicker'
import './createTask.css';

class CreateTask extends Component{

  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBBtn
          color 
          onClick={this.toggle} 
          className="btn-create-task mx-auto"
        >
          Create task
        </MDBBtn>

        <MDBModal
            isOpen={this.state.modal}
            toggle={this.toggle}
            size="md"
            cascading
        >
          <MDBModalHeader
            toggle={this.toggle}
            titleClass="d-inline title"
            className="text-center blue-gradient darken-3 white-text"
          >
            <MDBIcon className="mr-2" icon="pencil-alt" />
            Create task
          </MDBModalHeader>

          <MDBModalBody>
            <MDBInput label="Name" icon="signature" />
            <MDBInput label="Type" icon="tag" />
            <div className="md-form">
              <i data-test="input" className="far fa-calendar-alt prefix"></i>
              <DatePicker />
              <label class="active">Finish date</label>
            </div>

            <div className="text-center mt-1-half">
              <MDBBtn
                color
                className="mb-2 px-4"
                onClick={this.toggle}
              >
                save
              </MDBBtn>
            </div>
          </MDBModalBody>

        </MDBModal>
      </MDBContainer>
    );
  }
}

export default CreateTask;