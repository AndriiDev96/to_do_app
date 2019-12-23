import React, { Component } from "react";
import BDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment"
import './datePicker.css';

const  CURRENT_DAY = moment().toDate();

class DatePicker extends Component {
  state = {
    startDate: CURRENT_DAY
  };

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  render() {
    
    return (
      <BDatePicker
        showPopperArrow={false}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default DatePicker;