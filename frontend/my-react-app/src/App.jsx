import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/Create/CreateProduct";
import DetailProducts from "./pages/Detail/DetailProducts";

const App = () => {
  return (
    <div className=" flex h-screen flex-col items-center justify-center gap-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateProduct />}></Route>
          <Route path="/:id" element={<DetailProducts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
