import express from "express";
import * as productController from "../controllers/productControllers.js";

const router = express.Router();

router.post("/api/products/create", productController.productCreate);
router.get("/api/products/read", productController.productRead);
router.get("/api/products/readOne/:id", productController.productReadOne);
router.put("/api/products/update/:id", productController.productUpdate);
router.delete("/api/products/delete/:id", productController.productDelete);

export { router };
