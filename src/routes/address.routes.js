import express from "express";
import {
  createAddress,
  getAddress,
} from "../controllers/address.controller.js";

const router = express.Router();

router.post("/", createAddress);
router.get("/:id", getAddress);

export default router;
