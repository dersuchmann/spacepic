import React, { useState } from "react";
import { css } from "@acab/ecsstatic/scss";

export default function Counter({
  children,
  count: initialCount,
}: {
  children: React.ReactNode;
  count: number;
}) {
  const [count, setCount] = useState(initialCount);
  const add = () => {
    setCount(i => i + 1);
  };
  const subtract = () => {
    setCount(i => i - 1);
  };

  return (
    <>
      <div
        className={css`
          // tw="grid text-4xl grid-cols-3 mt-8 place-items-center"
          display: grid;
          font-size: 2em;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 2em;
          place-items: center;
        `}
      >
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div
        className={css`
          // tw="text-center"
          text-align: center;
        `}
      >
        {children}
      </div>
    </>
  );
}
