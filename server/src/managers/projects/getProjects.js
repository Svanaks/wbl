import Project from '../../models/project';

const getProjects = () => {
  try {
    const projectsPromise = Project.find({}).exec();

    return projectsPromise;
  } catch (err) {
    throw err;
  }
}

export default getProjects;