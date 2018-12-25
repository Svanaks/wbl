import React from "react";

function Skill(props) {
  return (
    <div key={props.skill._id} className="ui fluid card">
      <div className="content">
        <div className="header">
          {props.skill.title}
          <div className="ui right floated">
            {props.skill.type.map(techType => {
              return(
                <span className={`ui basic ${techType.color} circular label`}>{techType.label}</span>
              )
            })}
          </div>
        </div>
        <div className="meta">
        {props.skill.versions ? <span>Versions: {props.skill.versions}</span> : ''}
        </div>
      </div>
      <div className="extra content">
          {props.skill.description}
      </div>
      {props.skill.projects.length ?
        <div className="extra content">
          <div className="ui labels">
            {props.skill.projects.map(proj => {
              return(
                <a class="ui label with-popup" href={proj.url}target="_blank" data-position="bottom center" data-tooltip={proj.project.technology}>{proj.tag}</a>
              )
            })}
          </div>
        </div>
      : ''}
    </div>
  );
}

export default Skill;