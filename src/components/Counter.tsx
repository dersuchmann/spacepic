import React, { useState } from "react";
import { tw } from "../utils/tw-dummy";
import { css } from "@acab/ecsstatic/scss";
import INLINE from "../utils/inline-css";
const styled = INLINE.css;

export default function Counter({
  children,
  count: initialCount,
  customColor,
}: {
  children: React.ReactNode;
  count: number;
  customColor: string;
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
        style={
          styled`color: ${customColor};` 
        }
        className={
          tw`grid text-4xl grid-cols-3 mt-8 place-items-center`
        }
      >
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className={tw`text-center`}>{children}</div>
    </>
  );
}
