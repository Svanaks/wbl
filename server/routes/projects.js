import express from 'express';

const router = express.Router();

// Bring in Project Model
import { Project } from '../models/project';

// get Projects
router.get('/', (req, res) => {
  Project.find({}, (err, projects) => {
    if (err) {
      console.log(err);
    } else {
      res.json(projects);
    }
  });
});

module.exports = router;
