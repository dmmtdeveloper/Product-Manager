import express from "express";
import cors from "cors";
import * as productRoutes from "./server/routes/productRoutes.js";
import mongodbConfig from "./server/config/productConfig.js";

const app = express();
app.use(cors());
mongodbConfig();

app.use(express.json());
app.use(productRoutes.router);

app.listen(8080);
