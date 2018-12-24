import { getExperiences } from "../../../managers/experiences";

export const experiences = (req, res) => {
  try {
    getExperiences().then(experiences => res.json(experiences));

  } catch (err) {
    throw err;
  }
}

export default experiences;