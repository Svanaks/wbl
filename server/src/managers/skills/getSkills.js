import Skill from '../../models/skill';

const getSkills = () => {
  try {
    const skillsPromise = Skill.find({}).sort([['_id', 1]]).exec();

    return skillsPromise;
  } catch (err) {
    throw err;
  }
}

export default getSkills;