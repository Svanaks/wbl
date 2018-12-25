import React from "react";

function Experience(props) {
  return (
    <div key={props.experience._id} className="item">
      <div className="image">
        <img src={`../../../${props.experience.logoPath}`} />
      </div>
      <div className="middle aligned content">
        <a className="header">{props.experience.title}</a>
      
        <div className="meta">
          <span></span>
        </div>
        <div className="description">
          <ul>
            {props.experience.description.map(task => {
              return(
                <li>{task}</li>
              )
            })}
          </ul>
        </div>
        <div className="extra">
          <div className="ui labels">
            {props.experience.technology.map(tech => {
              return(
                <span class="ui label">{tech}</span>
              )
            })}
          </div>        
        </div>
      </div>
    </div>
  );
}

export default Experience;