import mongoose, { Schema } from "mongoose";

const packageSchema = new Schema(
  {
    packageId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    shipperId: {
      type: Schema.Types.ObjectId,
      ref: "shipping",
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    dimensions: {
      type: String,
      required: true,
    },
    packageType: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    from_name: {
      type: String,
      required: true,
    },
    to_name: {
      type: String,
      required: true,
    },
    Source: {
      type: String,
      required: true,
    },
    Destination: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Package = mongoose.model("Package", packageSchema);
