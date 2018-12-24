import React from "react";

function Experience(props) {
  return (
    <div>
      <h3>{props.experience.title}</h3>
        {/* {props.project.url && props.project.slug ? <a href={props.project.url}>{props.project.slug}</a> : ''}
        {props.project.repositoryLink ? <a href={props.project.repositoryLink}>Repository</a> : 'No Repository'}
        <p>{props.project.iconName}</p>
        <p>{props.project.description}</p>
        {props.project.technology.map(tech => {
          return(
            <p>{tech}</p>
          )
        })} */}
    </div>
  );
}

export default Experience;