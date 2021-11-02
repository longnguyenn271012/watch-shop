import { ProductTypeModel } from "../models/ProductTypeModel.js";

export const getProductTypes = async (req, res) => {
  try {
    const productTypes = await ProductTypeModel.find();
    console.log("productTypes", productTypes);
    res.status(200).json(productTypes);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createProductType = async (req, res) => {
  try {
    const newProductType = req.body;

    const productType = new ProductTypeModel(newProductType);
    await productType.save();

    res.status(200).json(productType);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateProductType = async (req, res) => {
  try {
    const updateProductType = req.body;

    const productType = await ProductTypeModel.findOneAndUpdate(
      { _id: updateProductType._id },
      updateProductType,
      { new: true }
    );

    res.status(200).json(productType);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
