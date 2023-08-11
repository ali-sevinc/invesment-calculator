function FormAction({ onReset }) {
  return (
    <p className="mt-8 flex justify-center gap-4">
      <button
        onClick={onReset}
        type="reset"
        className="font-customSerif cursor-pointer border-none bg-transparent text-[#c2e9e0] hover:bg-transparent hover:text-[#91e1d0]"
      >
        Reset
      </button>
      <button
        type="submit"
        className="font-customSerif cursor-pointer rounded-md bg-gradient-to-t from-[#1f584b] to-[#17493d] px-4 py-2 text-[#c2e9e0] hover:bg-gradient-to-r hover:from-[#1b5346] hover:to-[#113c32]"
      >
        Calculate
      </button>
    </p>
  );
}

export default FormAction;
