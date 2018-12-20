import Skill from '../../models/skill';

const getSkills = () => {
  try {
    const skillsPromise = Skill.find({}).exec();

    return skillsPromise;
  } catch (err) {
    throw err;
  }
}

export default getSkills;