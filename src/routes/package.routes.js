import express from "express";
import {
  createPackage,
  getPackage,
} from "../controllers/package.controller.js";

const router = express.Router();

router.post("/", createPackage);
router.get("/:id", getPackage);

export default router;
