import React, { Component } from "react";
import BDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';
import moment from "moment"

const  CURRENT_DAY = moment().toDate();

class DatePicker extends Component {
  render() {
    return (
      <BDatePicker
        showPopperArrow={false}
        selected={this.props.finishDate || CURRENT_DAY}
        dateFormat = "MM/dd/yyyy"
        onChange={this.props.getDate}
      />
    );
  }
}

export default DatePicker;