import React from "react";

function Skill(props) {
  console.log(props)
  return (
    <div>
    <h2>{props.skill.title}</h2>
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