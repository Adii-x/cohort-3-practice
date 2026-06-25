import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count - {count}</h1>
      <div className="btns">
        <button
          disabled={count === 0}
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
        >
          Decrease
        </button>

        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>

        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default App;
