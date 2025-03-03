import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Address } from "../models/address.model.js";

const createAddress = asyncHandler(async (req, res) => {
  const { address, city, state, pinCode, country, phone } = req.body;

  // Validation
  if (!address || !city || !state || !pinCode || !country || !phone) {
    throw new ApiError(400, "All fields are required");
  }

  // Create address
  const newAddress = await Address.create({
    address,
    city,
    state,
    pinCode,
    country,
    phone,
  });

  // Send response
  return res
    .status(201)
    .json(new ApiResponse(201, newAddress, "Address created successfully"));
});

const getAddress = asyncHandler(async (req, res) => {
  const address = await Address.findById(req.params.id);

  if (!address) {
    throw new ApiError(404, "Address not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, address, "Address fetched successfully"));
});

export { createAddress, getAddress };
