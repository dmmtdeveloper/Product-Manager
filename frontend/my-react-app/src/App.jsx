import ProductForm from "./components/form/ProductForm";
import ProductManagerTitle from "./components/titles/ProductManagerTitle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    
      <div className=" flex h-screen flex-col items-center justify-center gap-5">
        <ProductManagerTitle value="Product Manager" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductForm />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    
  );
};

export default App;
