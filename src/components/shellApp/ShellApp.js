import React, { Component } from 'react';
import './style.css';
/* import RenderTaks from '../renderTasks/RenderTasks'; */
import CreateTask from '../componentsGRUD/createTask/CreateTask';
import RenderTasks from '../showTasks/ShowTasks';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SectionFon = styled.section`
  height: 180px;
  width: 100%;
  margin-bottom: 15px;
  background: url(${process.env.PUBLIC_URL}/img/app_top.png) no-repeat;
  background-size: cover;
  color: white;
  box-shadow: 0 7px 7px -6px #111;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 10px 15px;
  outline: none!important;
`;

class ShellApp extends Component {
  render() {
    const nameLocalSt = localStorage.getItem('name');
    const nameUser = nameLocalSt === ' ' || nameLocalSt === null ? "User" : nameLocalSt;

    return (
      <div className="wrapper-sections">
        <SectionFon>
          <Link to="/">
            <Button>
              <img src={process.env.PUBLIC_URL + '/img/img_button/left-arrow.png'} alt="back"/>
            </Button>
          </Link>
          <div className="container">
            <h2 className="greeting">Hello {nameUser}!</h2>
            <p>Be successful! To arrange your tasks.</p>
          </div>
        </SectionFon>
        
        <section className="create-new-task">
          <CreateTask />
        </section>

        <section className="block-content">
          <div className="container">
            <RenderTasks />
          </div>
        </section>
      </div>
    );
  }
}

export default ShellApp;
