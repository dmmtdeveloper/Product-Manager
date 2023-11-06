import CreateButton from "./components/buttons/create/createButton";
import ProductForm from "./components/form/ProductForm";
import ProductManagerTitle from "./components/titles/ProductManagerTitle";

const App = () => {
    return (
        <div className=" flex h-screen flex-col items-center justify-center gap-5">
            <ProductManagerTitle />
            <ProductForm />
            <CreateButton />
        </div>
    );
};

export default App;
