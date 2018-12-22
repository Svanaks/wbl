import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { Menu } from "semantic-ui-react";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu pointing>
          <Menu.Item name='home' />
          <Menu.Item
            name='messages'
          />
          <Menu.Item
            name='friends'
          />
        </Menu>
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
