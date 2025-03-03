import express from "express";
import {
  createShipping,
  updateShippingStatus,
} from "../controllers/shipping.controller.js";

const router = express.Router();

router.post("/", createShipping);
router.patch("/:id/status", updateShippingStatus);

export default router;
