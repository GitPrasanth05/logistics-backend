import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Package } from "../models/package.model.js";
import mongoose from "mongoose";

const createPackage = asyncHandler(async (req, res) => {
  const {
    weight,
    dimensions,
    packageType,
    price,
    from_name,
    to_name,
    Source,
    Destination,
  } = req.body;

  // Validation
  if (
    !weight ||
    !dimensions ||
    !packageType ||
    !price ||
    !from_name ||
    !to_name ||
    !Source ||
    !Destination
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Generate ObjectIds for packageId and shipperId
  const packageId = new mongoose.Types.ObjectId();
  const shipperId = new mongoose.Types.ObjectId();

  // Create package
  const newPackage = await Package.create({
    packageId,
    shipperId,
    weight,
    dimensions,
    packageType,
    price,
    from_name,
    to_name,
    Source,
    Destination,
  });

  // Send response
  return res
    .status(201)
    .json(new ApiResponse(201, newPackage, "Package created successfully"));
});

const getPackage = asyncHandler(async (req, res) => {
  const packages = await Package.findById(req.params.id);

  if (!packages) {
    throw new ApiError(404, "Package not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, packages, "Package fetched successfully"));
});

export { createPackage, getPackage };
