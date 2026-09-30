function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error
}) {
  return (
    <div className="input-group">
      <label>{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? "input-error" : ""}
      />

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default InputField;