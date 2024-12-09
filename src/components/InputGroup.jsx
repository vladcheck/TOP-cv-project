import { HeaderWithSeparator } from "./HeaderWithSeparator";

export function InputGroup({ header, children }) {
  return (
    <div className="input-group">
      <HeaderWithSeparator type={2} text={header} />
      {children}
    </div>
  );
}
