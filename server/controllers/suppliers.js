import { SupplierModel } from "../models/SupplierModel.js";

export const getSuppliers = async (req, res) => {
  try {
    const suppliers = await SupplierModel.find();
    console.log("suppliers", suppliers);
    res.status(200).json(suppliers);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createSupplier = async (req, res) => {
  try {
    const newSupplier = req.body;

    const supplier = new SupplierModel(newSupplier);
    await supplier.save();

    res.status(200).json(supplier);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const updateSupplier = req.body;

    const supplier = await SupplierModel.findOneAndUpdate(
      { _id: updateSupplier._id },
      updateSupplier,
      { new: true }
    );

    res.status(200).json(supplier);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
