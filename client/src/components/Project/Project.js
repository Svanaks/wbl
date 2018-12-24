import React from "react";

function Project(props) {
  return (
    <div key={props.project._id} className="ui card">
      <div className="content">
        <div className="header">
          <span>{props.project.title}</span>
        </div>
        {
          props.project.url && props.project.slug ? 
            <div className="meta">
              <a href={props.project.url}>{props.project.slug}
              </a>
            </div>
            : 
            <div className="meta">
              -
            </div>
        }
      </div>
      <div className="extra content">
        <p>{props.project.description}</p>
        {props.project.repositoryLink ? 
          <a href={props.project.repositoryLink} style={{color:'#6A6AFF'}}>
            <i class="github alternate icon"></i>
            Repository
          </a> 
          :
          <span> 
            <i class="github alternate icon"></i>
            No Repository
          </span>
          }
      </div>
      <div className="extra content">
        {props.project.technology.map(tech => {
          return(
            <button class="ui tiny blue basic compact icon button">{tech}</button>
          )
        })}
      </div>
    </div>
  );
}

export default Project;