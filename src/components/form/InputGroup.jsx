function InputGroup({ value, onSetValue, label, id }) {
  return (
    <p>
      <label
        className="mb-1 block font-customSerif text-[0.5rem] font-semibold uppercase"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="w-[100%] border border-solid border-[#76c0ae] bg-transparent p-2 text-base"
        type="number"
        id={id}
        value={value}
        onChange={(e) => onSetValue(e.target.value)}
      />
    </p>
  );
}

export default InputGroup;
