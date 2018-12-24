import { Router } from "express";
import {
  getExperiences
} from "./controllers";

const router = Router();

router.get(
  "/",
  getExperiences
);

export default router;