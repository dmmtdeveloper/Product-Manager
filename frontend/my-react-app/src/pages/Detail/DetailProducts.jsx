import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DetailProducts = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const productId = useParams();
  let productIdData = productId.id;

  useEffect(() => {
    callProductApi();
  }, []);

  const callProductApi = async () => {
    let url = "http://localhost:8080/api/products/readOne/" + productIdData;
    url = url.replace(" ", "");

    try {
      const getOneProduct = await axios.get(url);
      console.log(getOneProduct);
      setTitle(getOneProduct.data.title);
      setPrice(getOneProduct.data.price);
      setDescription(getOneProduct.data.description);
    } catch (e) {
      console.log(e);
    }
  };

  const navigateHome = useNavigate();

  const handlebutton = () => {
    navigateHome("/");
  };

  return (
    <div>
      <h1 className="text-2xl">Product detail</h1>
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <br />
      <button
        className="rounded-md border bg-slate-600 px-8 py-2 font-semibold capitalize text-sky-50 hover:bg-slate-500"
        onClick={handlebutton}
      >
        home
      </button>
    </div>
  );
};

export default DetailProducts;
