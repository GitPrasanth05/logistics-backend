import mongoose, { Schema } from "mongoose";

const ShippingSchema = new Schema(
  {
    shipperId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    customerId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    packageDetails: {
      type: Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "On delivery", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Shipping = mongoose.model("Shipping", ShippingSchema);
