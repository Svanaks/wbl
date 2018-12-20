import { Router } from 'express';
import { default as projectRouter } from './projects';

const router = Router();

// router.use("/public", _public);

router.use(
  "/projects",
  projectRouter
);

export default router;
