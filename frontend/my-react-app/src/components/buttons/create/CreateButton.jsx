const CreateButton = ({ value, handleForm }) => {
  return (
    <button
      onClick={handleForm}
      type="submit"
      className="rounded-md border bg-slate-600 px-8 py-1 capitalize text-sky-50 hover:bg-slate-500"
    >
      {value}
    </button>

    
  );
};

export default CreateButton;
