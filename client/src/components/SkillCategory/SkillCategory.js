import React from "react";
import { Skill } from "../Skill";

function SkillCategory(props) {
  // console.log(props);
  return (
    <div className="Comment">
    <h1>{props.title}</h1>
      {props.category.map((skill, i) => {
            return( 
            <div key={skill._id}>
              <Skill skill={skill} />
            </div>
            )
          }
        )}
    </div>
  );
}

export default SkillCategory;