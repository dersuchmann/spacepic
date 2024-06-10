import React, { useState } from "react";
import { tw } from "../utils/tw-dummy";
import { css } from "@acab/ecsstatic/scss";
import INLINE from "../utils/inline-css";
const styled = INLINE.css;

export function Counter({
  initialCount,
  unitSingular,
  unitPlural,
  customColor,
}: {
  initialCount: number;
  unitSingular: string;
  unitPlural: string;
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
          tw`grid text-4xl grid-cols-3 place-items-center`
        }
      >
        <button onClick={subtract}>-</button>
        <pre>{count} {count === 1 ? unitSingular : unitPlural}</pre>
        <button onClick={add}>+</button>
      </div>
    </>
  );
}
