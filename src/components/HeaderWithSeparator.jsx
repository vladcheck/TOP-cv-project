export function HeaderWithSeparator({ type, text, classes }) {
  console.log(classes);
  return (
    <header className="header-with-separator">
      {type === 1 ? <h1>{text}</h1> : <h2>{text}</h2>}
      <hr />
    </header>
  );
}
