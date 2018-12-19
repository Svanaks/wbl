import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route
              exact
              path="/"
              component={Landing}
            />
            <Route
              exact
              path="/projects" //use navhashlink and anchor
              component={Projects}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
