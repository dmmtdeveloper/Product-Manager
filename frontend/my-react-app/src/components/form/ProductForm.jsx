const ProductForm = () => {
    return (
        <div className="flex justify-center flex-col ">
            <form className="flex gap-1 flex-col" action="">
                <input className="block border pl-2 capitalize p-2 rounded-lg" type="text" placeholder="title" />
                <input className="block border pl-2 capitalize p-2 rounded-lg" type="text" placeholder="price" />
                <input className="block border pl-2 capitalize p-2 rounded-lg" type="text" placeholder="description" />
            </form>
        </div>
    );
};

export default ProductForm;
