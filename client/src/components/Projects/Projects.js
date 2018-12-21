import React, { Component } from "react";
import ky from 'ky';

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
    
      console.log(response);
      this.setState({projects: response});
      console.log(this.state)
      //=> `{data: '🦄'}`
    })();
  }

  render() {
    return (
      <div>
        {this.state.projects.map((project, i) => {
            return( 
            <div key={project._id}>
              <div>
                {project.title}
              </div>
            </div>
            )
          }
        )}
      </div>
    );
  }
}

export default Projects;
