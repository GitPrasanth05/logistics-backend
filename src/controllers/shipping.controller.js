import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Shipping } from "../models/shipping.model.js";

const createShipping = asyncHandler(async (req, res) => {
  const {
    shipperId, // Changed from shipperID to shipperId
    customerId, // Changed from customerID to customerId
    packageDetails,
    shippingAddress,
    deliveryAddress,
  } = req.body;

  // Validation
  if (
    !shipperId ||
    !customerId ||
    !packageDetails ||
    !shippingAddress ||
    !deliveryAddress
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Create shipping
  const newShipping = await Shipping.create({
    shipperId, // Changed from shipperID to shipperId
    customerId, // Changed from customerID to customerId
    packageDetails,
    shippingAddress,
    deliveryAddress,
  });

  // Send response
  return res
    .status(201)
    .json(new ApiResponse(201, newShipping, "Shipping created successfully"));
});

const updateShippingStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  // Update shipping status
  const updatedShipping = await Shipping.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  if (!updatedShipping) {
    throw new ApiError(404, "Shipping not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedShipping,
        "Shipping status updated successfully"
      )
    );
});

export { createShipping, updateShippingStatus };
