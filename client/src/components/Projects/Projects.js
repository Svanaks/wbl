import React, { Component } from "react";
import ky from "ky";
import { Project } from "../Project";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    (async () => {
      const response = await ky.get('/projects').json();
    
      // console.log(response);
      this.setState({projects: response});
      // console.log(this.state)
      //=> `{data: '🦄'}`
    })();
  }

  render() {
    return (
      <div className="ui left doubling cards container">
        <h1>Projects</h1>
        <p>In this section I'll present to you some of my projects. If you wish to get more information on these projects you can either check the website and/or the github repository if they are available</p>
        {this.state.projects.map((project, i) => {
            return( 
              <Project project={project} />
            )
          }
        )}
      </div>
    );
  }
}

export default Projects;
