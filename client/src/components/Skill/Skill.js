import React from "react";

function Skill(props) {
  console.log(props)
  return (
    <div className="Comment">
    <h1>{props.skill.title}</h1>
    <ul>
      {props.skill.version ? <li>{props.skill.version}</li> : ''}
      {props.skill.description ? <li>{props.skill.description}</li> : ''}
      {props.skill.type ? <li>{props.skill.type}</li> : ''}
      <li></li>
      <li></li>
    </ul>
    </div>
  );
}

export default Skill;