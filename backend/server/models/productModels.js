import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
});

const Product = mongoose.model("Product", ProductSchema);

export { Product };
