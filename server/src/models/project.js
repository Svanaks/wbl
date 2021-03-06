import mongoose from 'mongoose';

const Project = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: false
  },
  slug: {
    type: String,
    required: false
  },
  repositoryLink: {
    type: String,
    required: false
  },
  iconName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technology: {
    type: [String],
    required: true
  },
  order: {
    type: Number,
    required: true
  }
});

export default mongoose.model("project", Project);
