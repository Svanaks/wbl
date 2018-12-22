import React, { Component } from "react";
import { Projects } from '../Projects';
import { Skills } from '../Skills';

class Main extends Component {

  render() {
    return (
      <>
        <Projects />
        <hr/>
        <Skills />      
      </>
    );
  }
}

export default Main;
