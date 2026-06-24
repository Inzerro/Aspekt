"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";

const team = [
  {
    name: "Kurmanbek",
    position: "Lead product designer",
    image: "/icons/Kurmanbek.icon.png",
  },
  { name: "Zere", position: "Project manager", image: "/icons/Zere.icon.png" },
  {
    name: "Temirlan",
    position: "Frontend specialist",
    image: "/icons/Temirlan.icon.png",
  },
  {
    name: "Kristina",
    position: "People OS",
    image: "/icons/Kristina.icon2.png",
  },
  {
    name: "Andrew",
    position: "Senior product designer",
    image: "/icons/Andrew.icon.png",
  },
  {
    name: "Nurai",
    position: "Graphic designer",
    image: "/icons/Nurai.icon.png",
  },
];

const values = [
  {
    title: "Работаем как единая команда — из любой точки мира",
    text: "Мы выстроили процессы так, чтобы работа не зависела от времени и места. Команда работает асинхронно — это ускоряет проекты и убирает лишние созвоны.",
  },
  {
    title: "Experts, No Egos",
    text: "В команде только специалисты с реальным опытом в продуктах. Без лишних ролей и перегруза — каждый отвечает за результат и делает свою работу на высоком уровне.",
  },
  {
    title: "Built on Support",
    text: "Мы создаём среду, где можно спокойно предлагать идеи, тестировать решения и двигать продукт вперёд. Внутри команды — поддержка, а не давление.",
  },
  {
    title: "Crystal Clear",
    text: "Чёткая коммуникация — основа нашей работы. Без сложных терминов и «воды» — только понятные решения и прозрачный процесс.",
  },
];

const aboutParagraphs = [
  "ASPEKT — это дизайн-студия, которая работает на пересечении продукта, дизайна и бизнеса.",
  "Мы создаём цифровые решения, которые не просто выглядят хорошо, а реально работают: упрощают пользовательский опыт, увеличивают конверсию и помогают продуктам расти.",
  "Наш подход — продуктовый. Перед тем как делать дизайн, мы разбираемся в задаче: как устроен бизнес, где теряются пользователи, что мешает росту.",
  "Мы строим дизайн так, чтобы он был понятен, масштабируем и не требовал постоянной поддержки.",
  "Наша цель — делать продукты, которые можно развивать быстро.",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut", delay },
});

const heroImages1 = [
  "/images/DuffelBalance1.png",
  "/images/DuffelBalance2.png",
  "/images/DuffelBalance3.png",
  "/images/Qeey1.png",
  "/images/Qeey2.png",
  "/images/Qeey3.png",
];

const heroImages2 = [
  "/images/Asmanbank1.png",
  "/images/Asmanbank2.png",
  "/images/wanderers1.png",
  "/images/wanderers2.png",
  "/images/wanderers3.png",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function useShuffleQueue(images: string[], intervalMs: number) {
  const [current, setCurrent] = useState(images[0]);
  const queueRef = useRef<string[]>([]);

  useEffect(() => {
    queueRef.current = shuffle(images);

    const interval = setInterval(() => {
      if (queueRef.current.length === 0) {
        queueRef.current = shuffle(images);
      }
      setCurrent(queueRef.current.shift()!);
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return current;
}

export default function AboutPage() {
  const heroImage1 = useShuffleQueue(heroImages1, 600);
  const heroImage2 = useShuffleQueue(heroImages2, 600);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="pt-[120px] pb-[80px] md:pt-[180px] md:pb-[140px]">
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[1100px] text-center text-[32px] leading-[1.05] tracking-[-0.04em] font-medium md:text-[44px]"
          >
            Дизайн-команда
            <span
              className="inline-block mx-2 align-middle md:mx-4"
              style={{ width: 56, height: 48 }}
            >
              <Image
                key={heroImage2}
                src={heroImage2}
                alt=""
                width={56}
                height={48}
                className="object-cover"
                style={{ width: 56, height: 48 }}
              />
            </span>
            <br />
            для цифровых
            <span
              className="inline-block mx-2 align-middle md:mx-4"
              style={{ width: 56, height: 48 }}
            >
              <Image
                key={heroImage1}
                src={heroImage1}
                alt=""
                width={56}
                height={48}
                className="object-cover"
                style={{ width: 56, height: 48 }}
              />
            </span>
            продуктов
          </motion.h1>
        </div>
        <div className="mt-[80px] px-[24px] max-w-[720px] md:mt-[120px] md:ml-[80px] md:px-0">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="text-[18px] leading-[32px] font-normal text-[#18191A] md:text-[24px]"
          >
            Мы проектируем сайты и приложения, которые легко масштабируются и
            приносят бизнесу результат — без зависимости от разработчиков
          </motion.p>
        </div>
      </section>

      {/* IMAGES */}
      <section className="mt-[80px] px-[24px] md:mt-[72px] md:ml-[80px] md:mr-[80px] md:px-0">
        <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-[0.8fr_1.6fr] lg:gap-6">
          <motion.div
            {...fadeUp()}
            className="overflow-hidden h-[193px] w-full md:h-[400px]"
          >
            <Image
              src="/images/main.about.png"
              alt=""
              width={416}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            {...fadeUp(0.15)}
            className="overflow-hidden h-[193px] w-full md:h-[400px]"
          >
            <Image
              src="/images/main.about2.png"
              alt=""
              width={848}
              height={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mt-[72px]">
        <ServicesSection />
      </section>

      {/* VALUES */}
      <section className="mt-[80px] px-[24px] md:mt-[48px] md:ml-[80px] md:mr-[80px] md:px-0">
        <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-2 lg:gap-[120px]">
          <div>
            <motion.h2
              {...fadeUp()}
              className="max-w-[620px] text-[32px] leading-[44px] tracking-[-0.03em] font-medium"
            >
              Работаем как единая команда —
              <br className="hidden md:block" />
              из любой точки мира
            </motion.h2>
          </div>

          <div>
            {values.map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp(index * 0.1)}
                className={`border-b border-black/10 py-8 ${index === 0 ? "pb-8 pt-0" : ""}`}
              >
                <h3 className="text-[20px] leading-[32px] font-medium md:text-[24px]">
                  {item.title}
                </h3>
                <p className="mt-[16px] text-[16px] leading-[24px] text-black/60">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mt-[100px] px-[24px] md:mt-[180px] md:ml-[80px] md:mr-[80px] md:px-0">
        <motion.h2
          {...fadeUp()}
          className="mb-[40px] text-left text-[32px] leading-[40px] font-medium tracking-[-0.03em] md:mb-12 md:text-center md:leading-[60px]"
        >
          Meet our team
        </motion.h2>

        <div className="grid grid-cols-1 gap-[14px] lg:grid-cols-3 lg:gap-5">
          {team.map((member, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.1)}
              className="flex items-center gap-[16px] h-[68px] w-[426px] rounded-[12px] bg-[#F2F3F5] p-[16px] md:p-5"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.1 + 0.1,
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={68}
                  height={64}
                  className="h-[48px] w-[48px] rounded-full object-cover"
                />
              </motion.div>

              <div>
                <h3 className="text-[18px] leading-[20px] font-medium">
                  {member.name}
                </h3>
                <p className="mt-[4px] text-[14px] leading-[24px] text-[#18191A]">
                  {member.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mt-[100px] mx-[24px] md:mt-[180px] md:mx-0 md:ml-[80px] md:mr-[80px]">
        <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-2 lg:gap-[120px]">
          <div>
            <motion.h2
              {...fadeUp()}
              className="text-[32px] font-medium leading-[1] tracking-[-0.03em]"
            >
              О нас
            </motion.h2>
          </div>

          <div className="space-y-6">
            {aboutParagraphs.map((text, index) => (
              <motion.p
                key={index}
                {...fadeUp(index * 0.1 + 0.1)}
                className="text-[16px] leading-[24px] text-[#434547]"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <main className="mt-[64px]">
        <Footer />
      </main>
    </>
  );
}
