import { useState } from "react";
import { useEffect } from "react";
import CreateButton from "../buttons/create/createButton";
import axios from "axios";

const ProductForm = () => {
  const [product, setproduct] = useState("");

  //Llamar a nuestro API para mostrar la información
  useEffect(() => {
    handleListApi();
  }, []);

  const handleListApi = async () => {
    const result = await axios.get("http://localhost:8080/api/products/read");
    console.log(result.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product.title, product.description, product.value);
  };

  const { title, price, description } = product;
  const handleChange = (e) => {
    setproduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center">
      <div className="flex flex-col gap-1" action="">
        <input
          className="rounded-2xl border p-3 capitalize"
          value={title}
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
        />

        <input
          className="rounded-2xl border p-3 capitalize"
          value={price}
          type="text"
          placeholder="price"
          name="price"
          onChange={handleChange}
        />

        <textarea
          className="rounded-2xl border p-3 capitalize"
          value={description}
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <CreateButton handleListApi={handleListApi} value="create" />
      </div>
    </form>
  );
};

export default ProductForm;
