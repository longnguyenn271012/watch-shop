import { OrderDetailModel } from "../models/OrderDetailModel.js";

export const getOrderDetail = async (req, res) => {
  try {
    const orderDetail = await OrderDetailModel.find();
    console.log("orderDetail", orderDetail);
    res.status(200).json(orderDetail);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createOrderDetail = async (req, res) => {
  try {
    const newOrderDetail = req.body;

    const orderDetail = new OrderDetailModel(newOrderDetail);
    await orderDetail.save();

    res.status(200).json(orderDetail);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateOrderDetail = async (req, res) => {
  try {
    const updateOrderDetail = req.body;

    const orderDetail = await OrderDetailModel.findOneAndUpdate(
      { _id: updateOrderDetail._id },
      updateOrderDetail,
      { new: true }
    );

    res.status(200).json(orderDetail);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
