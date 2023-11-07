import { useState } from "react";
import CreateButton from "../buttons/create/createButton";
import axios from "axios";

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  const { title, price, description } = product;

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async () => {
    if (title !== "" && price !== "" && description !== "") {
      const dataProduct = {
        title: title,
        price: price,
        description: description,
      };

      try {
        const result = await axios.post(
          "http://localhost:8080/api/products/create",
          dataProduct
        );
        if (result.status === 200) {
          alert("Producto creado");
        }
      } catch (e) {
        alert(e.response.data.message);
      }
    } else {
      alert("Llene el formulario");
    }
  };

  return (
    <div className="flex flex-col justify-center">
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
        <CreateButton handleForm={handleForm} value="create" />
      </div>
    </div>
  );
};

export default ProductForm;
