import React, { Component } from "react";
import { SkillCategory } from "../SkillCategory";
import ky from "ky";

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      languages: [],
      frameworks: [],
      databases: [],
      environments: [],
      templatings: [],
      devops: [],
      others: []
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
    
      let categorizedArray = this.groupBy(response, 'category');
      let languages = categorizedArray.Language;
      let frameworks = categorizedArray.Frameworks;
      let databases = categorizedArray.Database;
      let environments = categorizedArray.Environments;
      let templatings = categorizedArray.Templating;
      let devops = categorizedArray.Devops;
      let others = categorizedArray.Other;
      this.setState({
        languages,
        frameworks,
        databases,
        environments,
        templatings,
        devops,
        others
      });
    })();
  }

  render() {
    const {
      languages,
      frameworks,
      databases,
      environments,
      templatings,
      devops,
      others
    } = this.state;
    return (
      <div className="ui container">
        <h1>Skills</h1>
        <p>In this section, I'll present to you my skillset. Most of the items described here will have related projects that can be found on the bottom of the card. You can hover over the different projects to see the stack used for each one.</p>
        <div className="ui two column stackable grid">
          <div className="column">
            {languages.length ?
              <SkillCategory title="Languages" category={languages}/> : ''
            }
            {databases.length ?
              <SkillCategory title="Database" category={databases}/> : ''
            }
            {templatings.length ?
              <SkillCategory title="Templating" category={templatings}/> : ''
            }
          </div>
          <div className="column">
            {frameworks.length ?
              <SkillCategory title="Frameworks" category={frameworks}/> : ''
            }
            {devops.length ?
              <SkillCategory title="Devops" category={devops}/> : ''
            }
            {environments.length ?
              <SkillCategory title="Environments" category={environments}/> : ''
            }
            {others.length ?
              <SkillCategory title="Other" category={others}/> : ''
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
