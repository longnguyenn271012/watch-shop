import { VoucherModel } from "../models/VoucherModel.js";

export const getVouchers = async (req, res) => {
  try {
    const vouchers = await VoucherModel.find();
    console.log("vouchers", vouchers);
    res.status(200).json(vouchers);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createVoucher = async (req, res) => {
  try {
    const newVoucher = req.body;

    const voucher = new VoucherModel(newVoucher);
    await voucher.save();

    res.status(200).json(voucher);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateVoucher = async (req, res) => {
  try {
    const updateVoucher = req.body;

    const voucher = await VoucherModel.findOneAndUpdate(
      { _id: updateVoucher._id },
      updateVoucher,
      { new: true }
    );

    res.status(200).json(voucher);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
