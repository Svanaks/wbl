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

      console.log(categorizedArray);
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
      <div>
        {languages.length ?
          <SkillCategory title="Languages" category={languages}/> : ''
        }
        <hr/>
        {frameworks.length ?
          <SkillCategory title="Frameworks" category={frameworks}/> : ''
        }
        <hr/>
        {databases.length ?
          <SkillCategory title="Database" category={databases}/> : ''
        }
        <hr/>
        {environments.length ?
          <SkillCategory title="Environments" category={environments}/> : ''
        }
        <hr/>
        {templatings.length ?
          <SkillCategory title="Templating" category={templatings}/> : ''
        }
        <hr/>
        {devops.length ?
          <SkillCategory title="Devops" category={devops}/> : ''
        }
        <hr/>
        {others.length ?
          <SkillCategory title="Other" category={others}/> : ''
        }
      </div>
    );
  }
}

export default Skills;
