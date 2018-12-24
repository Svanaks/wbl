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
    
      // console.log(response);
      this.setState({experiences: response});
      // console.log(this.state)
      //=> `{data: '🦄'}`
    })();
  }

  render() {
    return (
      <div className="ui container">
        <h1>Experiences</h1>
        {this.state.experiences.map((experience, i) => {
            return( 
            <div key={experience._id}>
              <Experience experience={experience} />
            </div>
            )
          }
        )}
      </div>
    );
  }
}

export default Experiences;
