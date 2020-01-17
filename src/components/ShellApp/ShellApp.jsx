import React, { Component } from 'react';
import './style.css';
/* import RenderTaks from '../renderTasks/RenderTasks'; */
import CreateTask from '../Components_GRUD/createTask/CreateTask';
import styled from 'styled-components';

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

  state = {

  }

  render() {
    const nameLocalSt = localStorage.getItem('name');
    const nameUser = nameLocalSt === ' ' || nameLocalSt === null ? "User" : nameLocalSt;

    return (
      <section className="wrapper">

        <SectionFon>
          {/* <Link to="/">
            <Button>
              <img src={process.env.PUBLIC_URL + '/img/img_button/left-arrow.png'} alt="back"/>
            </Button>
          </Link> */}
          <div className="container">
            <h2 className="greeting">Hello {nameUser}!</h2>
            <p>Be successful! To arrange your tasks.</p>
          </div>
        </SectionFon>
        
        <main className="container">
          
          <section className="menu side-bar">
            <div>Test text 1</div>
            <div>Test text 2</div>
            <div>Test text 3</div>
            <div>Test text 4</div>
            <div>Test text 5</div>
          </section>

          <section className="side-appication">
            <header>
              <div className="top-block">
                <h3>Scheduler</h3>
              </div>

              <div className="top-block">
                <CreateTask />
              </div>
            </header>

            <div className="workspace">
              <div className="section-with-tasks">
                
              </div>
            </div>
          </section>
        
        </main>
      </section>
    );
  }
}

export default ShellApp;
