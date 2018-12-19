import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
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
  client: {
    type: String,
    required: false
  },
  technology: {
    type: String,
    required: true
  },
  technology2: {
    type: String,
    required: false
  },
  technology3: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("projects", ProjectSchema);
