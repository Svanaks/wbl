import { Router } from 'express';
import { default as projectRouter } from './projects';
import { default as skillRouter } from './skills';
import { default as experienceRouter } from './experiences';

const router = Router();

// router.use("/public", _public);

router.use(
  "/projects",
  projectRouter
);

router.use(
  "/skills",
  skillRouter
);

router.use(
  "/experiences",
  experienceRouter
)

export default router;
