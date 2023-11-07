const CreateButton = ({ value, handleForm }) => {
  return (
    <button
      onClick={handleForm}
      type="submit"
      className="rounded-md border bg-slate-600 px-8 py-2 capitalize text-sky-50 hover:bg-slate-500 font-semibold"
    >
      {value}
    </button>

    
  );
};

export default CreateButton;
