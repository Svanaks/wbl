import { getSkills } from "../../../managers/skills";

export const skills = (req, res) => {
  try {
    getSkills().then(skills => res.json(skills));

  } catch (err) {
    throw err;
  }
}

export default skills;