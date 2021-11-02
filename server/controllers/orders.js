import { OrderModel } from "../models/OrderModel.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find();
    console.log("orders", orders);
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createOrder = async (req, res) => {
  try {
    const newOrder = req.body;

    const order = new OrderModel(newOrder);
    await order.save();

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updateOrder = req.body;

    const order = await OrderModel.findOneAndUpdate(
      { _id: updateOrder._id },
      updateOrder,
      { new: true }
    );

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
