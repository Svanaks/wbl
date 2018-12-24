import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { Menu } from "semantic-ui-react";
import logo from "./img/logo.png";
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu pointing className="ui container">
          <img src={logo} className="logo" alt="logo" />
          <Menu.Item name='about' />
          <Menu.Item name='projects' />
          <Menu.Item name='skills' />
          <Menu.Item name='experience' />
          <Menu.Item name='contact' />
        </Menu>
        {/* <div class="ui container">
          <div class="ui large secondary pointing menu">
            <a class="toc item">
                <i class="sidebar icon"></i>
            </a>
            <a class="item" href="#about">Me</a>
            <a class="item" href="#projects">Projects</a>
            <a class="item" href="#skills">Skills</a>
            <a class="item" href="#experience">Experience</a>
          </div>
        </div> */}
        <Router>
          <div className="App">
            <div>
              <Route
                exact
                path="/"
                component={Main}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
