import mongoose from "mongoose";

const mongodbConfig = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/productManager")
    .then(() => {
      console.log("se conecto correcramente a la base de datos");
    })
    .catch((e) => {
      console.log("hubo un error: " + e);
    });
};

export default mongodbConfig;
