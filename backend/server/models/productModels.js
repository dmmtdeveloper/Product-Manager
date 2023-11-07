import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: [3, "El autor debe teber minimo 3 caracteres"],
    require: true,
  },
  price: {
    type: Number,
    min: [4, "El precio debe teber minimo 4 caracteres"],
    require: true,
  },
  description: {
    type: String,
  },
});

const Product = mongoose.model("Product", ProductSchema);

export { Product };
