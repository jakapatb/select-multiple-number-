import * as React from "react";
import "./styles.css";

export default function App() {
  const [period, setPeriod] = React.useState<null | number[]>(null);
  const numbers = React.useMemo(() => [...new Array(24)].map((_, i) => i), []);

  const handleSelect = (n: number) => () => {
    if (!period?.some((i) => i === n) && period !== null) {
      setPeriod((prev) => [...prev!, n].sort((a, z) => a - z));
    }
  };
  const handleStartSelect = (n: number) => () => {
    setPeriod([n]);
  };
  const handleEndSelect = () => {
    if (period) {
      alert(period.join(", "));
    }
    setPeriod(null);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {numbers.map((number) => (
        <button
          key={number}
          onMouseDown={handleStartSelect(number)}
          onMouseEnter={handleSelect(number)}
          onMouseUp={handleEndSelect}
        >
          {number}
        </button>
      ))}
      <h2>Start editing to see some magic happen!</h2>
      {period && period.join(", ")}
    </div>
  );
}
