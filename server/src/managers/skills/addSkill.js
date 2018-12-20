import Skill from '../../models/skill';

const addSkill = () => {
  try {
    const skill = new Skill({
      title: "testTitleSkill",
      projects: [
        {
          tag: "3",
          project: "5c1ba5a5fb6fc00eee83a1d1"
        },
        {
          tag: "4",
          project: "5c1bb50cfb6fc00eee83af2f"
        }
      ]
    });
    const skillPromise = skill.save()

    return skillPromise;
  } catch (err) {
    throw err;
  }
}

export default addSkill;