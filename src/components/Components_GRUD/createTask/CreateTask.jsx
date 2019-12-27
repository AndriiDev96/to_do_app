import React, { Component } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBIcon
} from "mdbreact";
import DatePicker from "../../DatePicker/DataPicker.jsx";
import "./createTask.css";
import { api } from '../../../REST';

class CreateTask extends Component {
  state = {
    modal: true,
    disableSaveBtn: false,
    fieldName: "",
    fieldType: "",
    filedFinishDate: null
  };

  stateModalWindow = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  getFinishDate(date) {
    this.setState({
      filedFinishDate: date
    });
  }

  getNameTask = event => {
    this.setState({
      fieldName: event.target.value
    });
  };

  getTypeTask = event => {
    const value = event.target.value;

    if (value.length <= 60) {
      this.setState({
        fieldType: event.target.value
      });
    } else {
      console.log("value is > 60");
    }
  };

  createTaskAsync = async event => {
    try {
      event.preventDefault();
      const data = {
        fieldName: this.state.fieldName,
        fieldType: this.state.fieldType,
        filedFinishDate: this.state.filedFinishDate
      }

      const task  = await api.createTask(data);

      console.log(task);
      

    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { modal, disableSaveBtn, fieldName, filedFinishDate } = this.state;

    return (
      <MDBContainer>
        <MDBBtn
          color
          onClick={this.stateModalWindow}
          className="btn-create-task mx-auto"
        >
          Create task
        </MDBBtn>

        <MDBModal
          isOpen={modal}
          toggle={this.stateModalWindow}
          size="md"
          cascading
        >
          <MDBModalHeader
            toggle={this.stateModalWindow}
            titleClass="d-inline title"
            className="text-center blue-gradient darken-3 white-text"
          >
            <MDBIcon className="mr-2" icon="pencil-alt" />
            Create task
          </MDBModalHeader>
          <MDBModalBody>
            <MDBInput
              label="Name"
              icon="signature"
              type="text"
              maxLength="100"
              onChange={this.getNameTask}
            />
            <MDBInput
              label="Type"
              icon="tag"
              type="text"
              maxLength="60"
              onChange={this.getTypeTask}
            />
            <div className="md-form">
              <i data-test="input" className="far fa-calendar-alt prefix"></i>
              <DatePicker
                getDate={this.getFinishDate.bind(this)}
                finishDate={filedFinishDate}
              />
              <label className="active">Finish date</label>
            </div>

            <div className="text-center mt-1-half">
              <MDBBtn
                color
                className="mb-2 px-4"
                onClick={this.createTaskAsync}
                disabled={disableSaveBtn}
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
