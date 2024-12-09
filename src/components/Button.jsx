export function Button({ type = "button", name, cb }) {
  return (
    <button
      type={type}
      onClick={(e) => {
        cb(e);
      }}
    >
      {name}
    </button>
  );
}
