import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    recipientAddress: {
      type: String,
      required: true,
    },
    recipient: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: String,
      required: true,
    },
    payment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const OrderDetailModel = mongoose.model("OrderDetail", schema);
