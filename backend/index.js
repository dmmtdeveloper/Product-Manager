import express from "express";
import * as productRoutes from "./server/routes/productRoutes.js";
import mongodbConfig from "./server/config/productConfig.js";

const app = express();
mongodbConfig();

app.use(express.json());
app.use(productRoutes.router);

app.listen(8080);
