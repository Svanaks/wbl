import React, { Component } from "react";
import ky from "ky";
import { Experience } from "../Experience";

class Experiences extends Component {
  constructor() {
    super();
    this.state = {
      experiences: [],
    };
  }

  componentDidMount() {
    (async () => {
      const response = await ky.get('/experiences').json();
      this.setState({experiences: response});
    })();
  }

  render() {
    return (
      <div className="ui container">
        <h1>Experiences</h1>
        <p>In this section I'll present to you my last experiences. If you wish to get more information on my experiences or formation, you can check my <a href="https://www.linkedin.com/in/william-bloch-b175b147/">linkedIn</a>.</p>
        <div className="ui grid">
          <div className="two wide column"></div>
          <div className="twelve wide column">
            <div className="ui items">
              {this.state.experiences.map((experience, i) => {
                  return( 
                    <Experience experience={experience} />
                  )
                }
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences;
