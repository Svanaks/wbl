import mongoose from 'mongoose';

const Skill = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  type: {
    type: [String],
    required: true
  },
  versions: {
    type: [String],
    required: false
  },
  description: {
    type: String,
    required: false
  },
  projects: [{
    tag: {
      type: String,
      required: true
    },
    project: {
      url: {
        type: String,
        required: false
      },
      technology: {
        type: [String],
        required: true
      }
    }
  }]
});

export default mongoose.model("skill", Skill);
