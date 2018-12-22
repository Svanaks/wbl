import React, { Component } from "react";
import ky from 'ky';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: [],
      languages: [],
      frameworks: []
    };
  }

  groupBy(arr, property) {
    return arr.reduce(function(memo, x) {
      if (!memo[x[property]]) { memo[x[property]] = []; }
      memo[x[property]].push(x);
      return memo;
    }, {});
  }

  componentDidMount() {
    (async () => {
      const response = await ky.get('/skills').json();
    
      // console.log(response);
      this.setState({skills: response});

      let categorizedArray = this.groupBy(this.state.skills, 'category');
      let languages = categorizedArray.Language;
      let frameworks = categorizedArray.Frameworks;
      this.setState({
        languages: languages,
        frameworks: frameworks
      });
      console.log(categorizedArray.Language);
      // console.log(this.state);      
      // // console.log(this.state.skills);
      // console.log(categorizedArray);
      //=> `{data: '🦄'}`
    })();
  }

  render() {
    return (
      <div>
        {/* {this.state.skills.map((skill, i) => {
            return( 
            <div key={skill._id}>
              <div>
                {skill.title}
              </div>
            </div>
            )
          }
        )} */}
        {this.state.languages.map((lang, i) => {
            return( 
            <div key={lang._id}>
              <div>
                {lang.title}
              </div>
            </div>
            )
          }
        )}
        <hr/>
        {this.state.frameworks.map((framework, i) => {
            return( 
            <div key={framework._id}>
              <div>
                {framework.title}
              </div>
            </div>
            )
          }
        )}
      </div>
    );
  }
}

export default Skills;
