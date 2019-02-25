import React, { Component } from 'react';
import styled from 'styled-components';
import './style.css';
import { Link } from "react-router-dom";

const Button = styled.button`
  display: block;
  margin-top: 10px;
  width: 120px;
  height: 40px;
  background-color: #0984e3;
  color: #fff;
  border: none;
  font-weight: bold;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  background: url(${process.env.PUBLIC_URL}/img/start_page/goluboy_fon.png);

  @media screen and (max-width: 1025px) {
    height: auto;
    background: url(${process.env.PUBLIC_URL}/img/start_page/goluboy_fon_mobile.jpg);
  }

  @media screen and (max-width: 425px) {
    min-height: 100%;
  }
`;

class UserName extends Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  };

  handleClick = (event) => {
    event.preventDefault();
    if (this.state.name !== '' && this.state.name.length < 12) {
      localStorage.setItem('name', `${this.state.name}`)

      this.setState({
        name: ''
      });
    }
  };

  render() {
    const getName = localStorage.getItem('name');
    const userName = getName === ' ' || getName === null ? "User" : getName;

    return (
      <div className="entrance-page">
        <Wrapper>
          <div className="container flex-for-div h-100">
            <div className="discribin-text">
              <h1 className="pt-5 font-weight-bold text-uppercase">A better to-do list app <br /> for work</h1>
              <p>It is the easiest way for teams to plan,<br /> organize, and track their work.</p>
            </div>
            <div className="form">
              <div className="data-user">
                <div className="sing-on">
                  <h4>Your Name</h4>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                  <p>Do you want to continue as a {userName}?</p>
                  <Button
                    onClick={this.handleClick}>
                    <Link to="/todo" className="btn-todo">GET STARTED</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default UserName;
