import { addSkill } from "../../../managers/skills";

export const newSkill = (req, res) => {
  try {
    addSkill().then(skill => res.json(skill));

  } catch (err) {
    throw err;
  }
}

export default newSkill;