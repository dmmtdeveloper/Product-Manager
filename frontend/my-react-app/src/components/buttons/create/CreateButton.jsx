const CreateButton = ({ value, handleListApi}) => {
  return (
    <button
    onClick={handleListApi}
      type="submit"
      className="rounded-md border bg-slate-600 px-8 py-1 text-sky-50 hover:bg-slate-500 capitalize"
    >
      {value}
    </button>
  );
};

export default CreateButton;
