"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Golos_Text } from "next/font/google";
import { RadianceText } from "@/components/RadianceText";
import { MobileRadianceText } from "@/components/MobileRadianceText";

const golosText = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

function isPageReload() {
  try {
    const navEntries = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];
    return navEntries.length > 0 && navEntries[0].type === "reload";
  } catch {
    return false;
  }
}

export function HeroSection() {
  const [datetime, setDatetime] = useState({
    day: "",
    date: "",
    time: "",
  });

  const titleWrapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleSize, setTitleSize] = useState("clamp(4rem, 12vw, 10rem)");

  const [loaded, setLoaded] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  // Анимация заголовка играет только:
  // 1) при первом визите за сессию (нет флага в sessionStorage)
  // 2) при полном reload страницы (флаг сбрасывается принудительно)
  // При обычном SPA-переходе между страницами — анимация не повторяется.
  useEffect(() => {
    if (isPageReload()) {
      sessionStorage.removeItem("preloader-finished");
    }

    const finished = sessionStorage.getItem("preloader-finished");

    if (finished) {
      // Анимация уже была проиграна в этой сессии — показываем сразу
      setLoaded(true);
      setFirstLoad(false);
      return;
    }

    const handler = () => {
      setLoaded(true);
      setFirstLoad(true);
      sessionStorage.setItem("preloader-finished", "true");
    };

    window.addEventListener("preloaderDone", handler);

    return () => {
      window.removeEventListener("preloaderDone", handler);
    };
  }, []);

  useEffect(() => {
    const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    const months = [
      "янв",
      "фев",
      "мар",
      "апр",
      "май",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "ноя",
      "дек",
    ];

    const update = () => {
      const now = new Date();

      setDatetime({
        day: days[now.getDay()],
        date: `${now.getDate()} ${months[now.getMonth()]}`,
        time: [
          String(now.getHours()).padStart(2, "0"),
          String(now.getMinutes()).padStart(2, "0"),
          String(now.getSeconds()).padStart(2, "0"),
        ].join(":"),
      });
    };

    update();
    const id = setInterval(update, 1000);

    return () => clearInterval(id);
  }, []);

  useLayoutEffect(() => {
    const updateTitleSize = () => {
      const wrap = titleWrapRef.current;
      const title = titleRef.current;

      if (!wrap || !title) return;

      title.style.fontSize = "10.85rem";

      const availableWidth = wrap.clientWidth;
      const measuredWidth = title.scrollWidth;

      if (!availableWidth || !measuredWidth) return;

      const fitRatio = availableWidth / measuredWidth;
      const nextSize = Math.min(10.85, 10.85 * fitRatio * 0.998);

      setTitleSize(`${Math.max(nextSize, 4)}rem`);
    };

    updateTitleSize();

    const resizeObserver = new ResizeObserver(updateTitleSize);

    if (titleWrapRef.current) {
      resizeObserver.observe(titleWrapRef.current);
    }

    window.addEventListener("resize", updateTitleSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateTitleSize);
    };
  }, []);

  const text = "ASPEKT DESIGN".split("");

  const WORDS = [
    "Студия дизайна интерфейсов",
    "Дизайн-студия цифровых продуктов",
    "UI/UX агентство",
  ];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="flex
    min-h-screen
    flex-col
    px-[16px]
    pt-[104px]
    pb-8
    md:px-[80px]
    md:pt-[108px]
    md:pb-6"
      style={{ minHeight: "100svh" }}
    >
      {/* MOBILE */}
      <div className="flex flex-1 flex-col md:hidden">
        <div className="pt-[32px]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8 }}
            className={`${golosText.className} text-[24px] font-medium leading-[32px] text-[#18191A] dark:text-[#F2F2F2]`}
          >
            Проектируем цифровые продукты, которые выглядят просто — и работают
            точно
          </motion.h1>

          <section className="mt-4">
            <MobileRadianceText />
          </section>
        </div>

        <div className="mt-auto flex items-center justify-between text-[15px] text-[#18191A] dark:text-[#F2F2F2]">
          <span className="tabular-nums">
            {datetime.day}, {datetime.date} {datetime.time}
          </span>

          <span>Бишкек, Кыргызстан</span>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex md:flex-1 md:flex-col">
        <div className="flex flex-1 items-center justify-center pb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`${golosText.className} max-w-[500px] text-center text-[18px] leading-[26px] text-foreground dark:text-[#F2F2F2]`}
          >
            Проектируем цифровые продукты, которые выглядят
            <br /> просто — и работают точно
          </motion.p>
        </div>

        <div className="space-y-5">
          <div className="grid w-full grid-cols-[max-content_max-content_1fr_max-content] items-center gap-x-16 text-foreground">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`${golosText.className} max-w-[500px] text-center text-[16px] leading-[26px] text-foreground dark:text-[#F2F2F2]`}
            >
              <span className="text-[16px] tabular-nums dark:text-[#F2F2F2]">
                {datetime.day}, {datetime.date} {datetime.time}
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`${golosText.className} max-w-[500px] text-center text-[16px] leading-[26px] text-foreground dark:text-[#F2F2F2]`}
            >
              Бишкек, Кыргызстан
            </motion.p>

            <span />

            <div className="justify-self-end text-right text-[16px] dark:text-[#F2F2F2]">
              <RadianceText />
            </div>
          </div>

          <div ref={titleWrapRef} className="w-full overflow-hidden">
            <motion.h1
              ref={titleRef}
              initial="hidden"
              animate={loaded ? "visible" : "hidden"}
              className={`${golosText.className} block whitespace-nowrap text-left text-foreground`}
              style={{
                fontSize: titleSize,
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: "-0.022em",
                marginLeft: "-0.028em",
              }}
            >
              {text.map((char, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden dark:text-[#F2F2F2]"
                >
                  <motion.span
                    variants={{
                      hidden: {
                        y: "100%",
                      },
                      visible: {
                        y: "0%",
                      },
                    }}
                    transition={{
                      duration: firstLoad ? 1 : 0,
                      ease: [0.76, 0, 0.24, 1],
                      delay: firstLoad ? i * 0.04 : 0,
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}
