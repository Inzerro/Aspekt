"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "UX - Исследование",
    tag: "Discovery",
    items: [
      "Анализ бизнес-целей и метрик",
      "Рынок и конкуренты",
      "Интервью с пользователями",
      "Работа с гипотезами",
    ],
    position: "left",
  },
  {
    title: "Проектирование",
    tag: "Design",
    items: ["Дизайн система", "Wireframes", "Работа с UI", "Прототипирование"],
    position: "center",
  },
  {
    title: "Тестирование",
    tag: "Validate",
    items: [
      "Юзабилити-тестирование",
      "A/B тесты",
      "Анализ метрик после релиза",
      "Итерации и улучшения",
    ],
    position: "right",
  },
];

const tagWidths: Record<string, string> = {
  Discovery: "w-[99px]",
  Design: "w-[79px]",
  Validate: "w-[88px]",
};

const positionClass: Record<string, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export function ApproachSection() {
  return (
    <section className="relative overflow-hidden py-[60px] md:py-28">
      <div className="px-[16px] lg:px-[80px]">
        {/* Header */}
        <div className="grid md:grid-cols-2 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[28px] font-medium leading-none text-[#18191A] md:text-[32px]"
          >
            Продуктовый подход
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-[32px] max-w-[420px] text-[18px] leading-[1.5] text-[#18191A] md:mt-0 md:justify-self-end"
          >
            Работаем итерациями, подключаемся на любом этапе дизайна
          </motion.p>
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-[20px] md:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              className="rounded-[24px] bg-[#F2F3F5] p-[24px]"
            >
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[24px]">
                  <h3 className="text-[20px] font-medium leading-[1.15] text-[#18191A]">
                    {step.title}
                  </h3>
                  <ul className="flex flex-col gap-[20px]">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="text-[14px] leading-[1.4] text-[#18191A]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <span
                  className={`inline-flex h-[36px] items-center justify-center rounded-full bg-[#111111] text-[14px] font-medium text-white ${tagWidths[step.tag]}`}
                >
                  {step.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop */}
        <div className="relative hidden md:block">
          <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="border-l border-dashed border-[#D9D9D9]"
              />
            ))}
          </div>

          <div className="relative flex flex-col gap-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                className={`flex ${positionClass[step.position]}`}
              >
                <div className="w-full max-w-[524px] rounded-[16px] bg-[#F2F3F5] px-[24px] py-[16px]">
                  <div className="flex min-h-[116px] justify-between gap-8">
                    <div className="flex flex-col justify-between">
                      <p className="text-[20px] font-medium text-[#18191A]">
                        {step.title}
                      </p>
                      <span className="inline-flex w-fit items-center rounded-full bg-[#18191A] px-5 py-3 text-[14px] font-medium text-white">
                        {step.tag}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-4">
                      {step.items.map((item) => (
                        <p
                          key={item}
                          className="text-[14px] leading-[20px] text-[#18191A]"
                        >
                          {item}
                        </p>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
