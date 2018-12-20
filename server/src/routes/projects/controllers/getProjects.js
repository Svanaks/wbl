import { getProjects } from "../../../managers/projects";

export const projects = (req, res) => {
  try {
    getProjects().then(projects => res.json(projects));

  } catch (err) {
    throw err;
  }
}

export default projects;