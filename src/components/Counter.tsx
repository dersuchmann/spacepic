import React, { useState } from "react";
import { tw } from "../utils/tw-dummy";
import { css } from "@acab/ecsstatic/scss";

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
        className={
          tw`grid text-4xl grid-cols-3 mt-8 place-items-center` +
          (customColor === "blue"
            ? css`
                color: blue;
              `
            : css`
                color: green;
              `)
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
