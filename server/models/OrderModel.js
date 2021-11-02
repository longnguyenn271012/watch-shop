import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model("Order", schema);
