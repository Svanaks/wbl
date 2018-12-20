import mongoose from 'mongoose';

const Skill = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: false
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
      required: false
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: false
    }
  }]
});

export default mongoose.model("skill", Skill);
