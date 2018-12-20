import { Router } from 'express';
import { default as projectRouter } from './projects';
import { default as skillRouter } from './skills';

const router = Router();

// router.use("/public", _public);

router.use(
  "/projects",
  projectRouter
);

router.use(
  "/skills",
  skillRouter
)

export default router;
