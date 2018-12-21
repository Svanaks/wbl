import { Router } from "express";
import {
  getSkills,
  addSkill
} from "./controllers";

const router = Router();

router.get(
  "/",
  getSkills
);

export default router;