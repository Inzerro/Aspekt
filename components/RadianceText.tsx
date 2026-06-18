"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "Студия дизайна интерфейсов",
  "Дизайн-студия цифровых продуктов",
  "UI/UX агентство",
];

export function RadianceText() {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(WORDS[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (index + 1) % WORDS.length;
      const next = WORDS[nextIndex];

      let step = 0;

      const max = Math.max(display.length, next.length);

      const anim = setInterval(() => {
        step++;

        setDisplay(
          next
            .split("")
            .map((char, i) => (i < step ? char : (display[i] ?? "")))
            .join(""),
        );

        if (step >= max) {
          clearInterval(anim);
          setIndex(nextIndex);
        }
      }, 30);

      return () => clearInterval(anim);
    }, 5000);

    return () => clearInterval(timer);
  }, [index, display]);

  return (
    <div
      className="
        h-[16px]
        overflow-hidden
        text-[16px]
        leading-[16px]
        whitespace-nowrap
      "
    >
      {display}
    </div>
  );
}
