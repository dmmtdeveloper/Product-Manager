import { Product } from "../models/productModels.js";

const productCreate = async (req, res) => {
  try {
    const productData = req.body;
    const productPost = await Product.create(productData);
    res.status(200).json(productPost);
  } catch (e) {
    console.log("ERROR: " + e);
    res.status(300).json({
      message: e.message,
    });
  }
};

const productRead = async (req, res) => {
  const productData = req.body;
  const productRead = await Product.find(productData);
  res.status(200).json(productRead);
};

const productReadOne = async (req, res) => {
  const productId = req.params.id;
  const productReadOne = await Product.findById(productId);
  res.status(200).json(productReadOne);
};

const productUpdate = async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = req.body;
    await Product.findByIdAndUpdate(productId, productData, {runValidators:true});
    res.status(200).json();
  } catch (e) {
    console.log("EROR: " + e);
    res.status(300).json({
      message: e.message,
    });
  }
};

const productDelete = async (req, res) => {
  const productId = req.params.id;
  await Product.findByIdAndDelete(productId);
  res.status(200).json();
};

export {
  productCreate,
  productDelete,
  productRead,
  productUpdate,
  productReadOne,
};
