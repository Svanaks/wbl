import mongoose from 'mongoose';

const Experience = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  logoPath: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  description: {
    type: [String],
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

export default mongoose.model("experience", Experience);
