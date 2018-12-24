import Experience from '../../models/experience';

const getExperiences = () => {
  try {
    const experiencesPromise = Experience.find({}).exec();

    return experiencesPromise;
  } catch (err) {
    throw err;
  }
}

export default getExperiences;