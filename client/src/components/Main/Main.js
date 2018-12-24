import React, { Component } from "react";
import { Projects } from "../Projects";
import { Experiences } from "../Experiences";
import { Skills } from "../Skills";
import { LandingSection } from "../LandingSection";
import { About } from "../About";

class Main extends Component {

  render() {
    return (
      <div>
        <div className="ui vertical stripe segment">        
          <LandingSection />
        </div>        
        <div className="ui vertical stripe segment">
          <About />
        </div>
        <div className="ui vertical stripe segment">
          <Projects />
        </div>
        <div className="ui vertical stripe segment">
          <Skills />
        </div>
        <div className="ui vertical stripe segment">          
          <Experiences />
        </div>                
      </div>
    );
  }
}

export default Main;
