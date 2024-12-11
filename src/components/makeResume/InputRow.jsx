export function InputRow({ name, inputName, type = "text", placeholder, defaultValue, required = false }) {
  return (
    <div className="input-row">
      <label className="input-label">
        <span className="input-name">{name}</span>
        <input
          name={inputName}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          min={type === "number" ? 1 : null}
        />
      </label>
    </div>
  );
}
