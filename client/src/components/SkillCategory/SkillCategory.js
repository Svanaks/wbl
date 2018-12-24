import React from "react";
import { Skill } from "../Skill";

function SkillCategory(props) {
  // console.log(props);
  return (
    <div>
    <h3>{props.title}</h3>
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