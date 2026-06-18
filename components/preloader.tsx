"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Golos_Text } from "next/font/google";

const golosText = Golos_Text({
  subsets: ["latin"],
  weight: ["400"],
});

const DIGITS_MAIN = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const DIGITS_FIRST = ["0", "1"];
const DIGITS_THIRD = Array.from({ length: 31 }, (_, index) => {
  if (index === 30) return "0";
  return String(Math.floor(index / 3));
});

const minVisibleMs = 1800;
const tickMs = 160;

function DigitColumn({ digits, index }: { digits: string[]; index: number }) {
  return (
    <>
      {/* Mobile: 180px */}
      <div className="h-[180px] overflow-hidden md:hidden">
        <motion.div
          animate={{ y: -(index * 180) }}
          transition={{ duration: 0.32, ease: [0.55, 0, 0.1, 1] }}
        >
          {digits.map((digit, i) => (
            <div
              key={`m-${digit}-${i}`}
              className={`${golosText.className} flex h-[180px] items-center justify-start text-[180px] leading-none font-normal text-white`}
            >
              {digit}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop: 360px */}
      <div className="hidden h-[360px] overflow-hidden md:block">
        <motion.div
          animate={{ y: -(index * 360) }}
          transition={{ duration: 0.32, ease: [0.55, 0, 0.1, 1] }}
        >
          {digits.map((digit, i) => (
            <div
              key={`d-${digit}-${i}`}
              className={`${golosText.className} flex h-[360px] items-center justify-start text-[360px] leading-none font-normal text-white`}
            >
              {digit}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export function Preloader() {
  const [step, setStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const readyRef = useRef(false);
  const stepRef = useRef(0);
  const finishScheduledRef = useRef(false);
  const startTimeRef = useRef(0);

  const firstIndex = step === 10 ? 1 : 0;
  const secondIndex = step;
  const thirdIndex = step === 10 ? 30 : step * 3;

  const counter = useMemo(
    () => (
      <motion.div
        animate={{ y: isExiting ? 220 : 0, opacity: isExiting ? 0 : 1 }}
        transition={{ duration: 0.45, ease: [0.55, 0, 0.1, 1] }}
        className="origin-bottom-left"
      >
        <div className="grid grid-cols-3 gap-[6px] md:gap-5">
          <DigitColumn digits={DIGITS_FIRST} index={firstIndex} />
          <DigitColumn digits={DIGITS_MAIN} index={secondIndex} />
          <DigitColumn digits={DIGITS_THIRD} index={thirdIndex} />
        </div>
      </motion.div>
    ),
    [firstIndex, secondIndex, thirdIndex, isExiting],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    startTimeRef.current = performance.now();

    const tryFinish = () => {
      if (
        finishScheduledRef.current ||
        stepRef.current < 9 ||
        !readyRef.current
      )
        return;

      const elapsed = performance.now() - startTimeRef.current;
      const remaining = Math.max(0, minVisibleMs - elapsed);

      finishScheduledRef.current = true;

      window.setTimeout(() => {
        setStep(10);
        window.setTimeout(() => setIsExiting(true), 240);
        window.setTimeout(() => {
          window.dispatchEvent(new Event("preloaderDone"));
          setIsHidden(true);
          document.body.style.overflow = previousOverflow;
        }, 1500);
      }, remaining);
    };

    const intervalId = window.setInterval(() => {
      if (stepRef.current >= 9) {
        window.clearInterval(intervalId);
        tryFinish();
        return;
      }
      stepRef.current += 1;
      setStep(stepRef.current);
      tryFinish();
    }, tickMs);

    const onLoad = () => {
      readyRef.current = true;
      tryFinish();
    };

    if (document.readyState === "complete") {
      readyRef.current = true;
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    tryFinish();

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("load", onLoad);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (isHidden) return null;

  return (
    <motion.div
      animate={{ y: isExiting ? "-100%" : "0%" }}
      transition={{ duration: 1.35, ease: [0.65, 0, 0.35, 1] }}
      className="fixed inset-0 z-[9999] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#F53D18]" />
      <div className="absolute left-4 bottom-8 z-10 md:left-6 md:bottom-6">
        {counter}
      </div>
    </motion.div>
  );
}
