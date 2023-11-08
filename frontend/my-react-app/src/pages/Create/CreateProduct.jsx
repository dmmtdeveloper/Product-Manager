import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [listProducts, setListProducts] = useState([]);
  //   console.log(title, price, description);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleButton = async () => {
    let productData = {
      title: title,
      price: price,
      description: description,
    };

    try {
      await axios.post(
        "http://localhost:8080/api/products/create",
        productData
      );
      setTitle("");
      setPrice("");
      setDescription("");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    listReadProducts();
  }, []);

  const listReadProducts = async () => {
    let dataProducts = await axios.get(
      "http://localhost:8080/api/products/read"
    );
    setListProducts(dataProducts.data);
    console.log(listProducts);
  };

  return (
    <>
      <form
        className="flex flex-col justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl">Product Manager</h1>

        <div className="flex flex-col gap-1">
          <input
            className="rounded-2xl border p-3 capitalize"
            placeholder="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="rounded-2xl border p-3 capitalize"
            placeholder="price"
            name="price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="rounded-2xl border p-3 capitalize"
            placeholder="description"
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            onClick={handleButton}
            className="rounded-md border bg-slate-600 px-8 py-2 font-semibold capitalize text-sky-50 hover:bg-slate-500"
          >
            Create
          </button>

          <h2 className="text-center mt-4 text-2xl">List Product</h2>
          {listProducts.map((product, index) => {
            return (
              <div key={index}>
                <Link to={`/ ${product._id}`}>{product.title}</Link>
              </div>
            );
          })}
        </div>
      </form>
    </>
  );
};

export default CreateProduct;
