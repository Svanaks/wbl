import React from "react";
import { Skill } from "../Skill";

function SkillCategory(props) {
  // console.log(props);
  return (
    <div className="ui raised segment">
    <span class="ui black ribbon label">{props.title}</span>
      {props.category.map((skill, i) => {
            return( 
              <Skill skill={skill} />
            )
          }
        )}
    </div>
  );
}

export default SkillCategory;