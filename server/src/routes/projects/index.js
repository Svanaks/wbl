import { Router } from "express";
import {
  getProjects
} from "./controllers";

const router = Router();

router.get(
  "/",
  getProjects
);

export default router;