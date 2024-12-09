export function HeaderWithSeparator({ level, text }) {
  return (
    <header className="header-with-separator">
      {level === 1 ? <h1>{text}</h1> : <h2>{text}</h2>}
      <hr />
    </header>
  );
}
