"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const projects = [
  {
    id: 1,
    slug: "duffel-balance",
    name: "Duffel Balance",
    type: "Web Dashboard",
    icon: "/images/Duffel.Icon.png",
    title: "Онлайн Банкинг",
    description:
      "Duffel Balance - это онлайн-банковский сервис, созданный для развития международного сервиса экосистемы компании Duffel",
    industry: "FinTech",
    scope: "UX/UI Design",
    year: "2026",
    image: "/images/Online.banking.png",
    articleTitle:
      "Революция в банковской сфере: Повышение удобства пользователей с помощью Dello Fintech Banking",
    articleText:
      "В эпоху, когда безупречный цифровой опыт определяет ожидания пользователей, банковское приложение Dello Fintech становится маяком инноваций в сфере финансовых технологий. В этом тематическом исследовании рассматривается процесс проектирования пользовательского интерфейса (UX), направленный на преобразование обычных банковских взаимодействий в интуитивно понятные, эффективные и ориентированные на пользователя.",
    gallery: {
      hero: "/images/Duffel.main.png",
      grid: [
        "/images/DuffelBalance.main1.png",
        "/images/DuffelBalance.main2.png",
        "/images/DuffelBalance.main3.png",
        "/images/DuffelBalance.main4.png",
        "/images/DuffelBalance.main5.png",
        "/images/DuffelBalance.main6.png",
      ],
      bottom: "/images/DuffelBalance.main7.png",
    },
  },
  {
    id: 2,
    slug: "qeey",
    name: "QEEY",
    type: "Mobile App",
    icon: "/images/Qeey.icon.png",
    title: "Qeey",
    description:
      "Qeey — мобильное приложение для мгновенного поиска и бронирования жилья с удобным пользовательским интерфейсом.",
    industry: "Travel",
    scope: "UX/UI Design",
    year: "2026",
    image: "/images/Qeey.main1.png",
    articleTitle:
      "Revolutionizing Banking: Enhancing User Experience with the Dello Fintech Banking",
    articleText:
      "In an era where seamless digital experiences define user expectations, the Dello Fintech Banking App emerges as a beacon of innovation in the financial technology landscape. This case study delves into the user experience (UX) design journey undertaken to transform conventional banking interactions into intuitive, efficient, and user-centric experiences.",
    gallery: {
      topRow: ["/images/Qeey.main2.png", "/images/Qeey.main3.png"],
      middle: "/images/Qeey.main4.png",
      leftTall: "/images/Qeey.main5.png",
      rightTop: "/images/Qeey.main6.png",
      rightBottom: "/images/Qeey.main7.png",
      secondSection: {
        banner: "/images/Qeey.main8.png",
        phonesCombined: "/images/Qeey.main9.png",
        middleLeft: "/images/Qeey.main10.png",
        middleRight: "/images/Qeey.main11.png",
        secondCombined: "/images/Qeey.main12.png",
        bottomLeft: "/images/Qeey.main13.png",
        bottomRight: "/images/Qeey.main14.png",
      },
    },
  },
  {
    id: 3,
    slug: "asman-bank",
    name: "Asman Bank",
    type: "Website",
    icon: "/images/Asmanbank.Icon.png",
    title: "Асман Банк",
    description:
      "Cовременный банк, объединяющий международные стандарты качества и индивидуальный подход к каждому клиенту",
    industry: "FinTech",
    scope: "UX/UI Design",
    year: "2026",
    image: "/images/Asman.main1.png",
    articleTitle:
      "ЗАО «Асман Банк» - это ваш надежный партнер, объединяющий международные стандарты качества и индивидуальный подход к каждому клиенту.",
    articleText:
      "Цель - сделать банковские услуги удобными, безопасными и прозрачными. Мы объединяем передовые технологии, глобальные практики и персональное внимание, чтобы обеспечить клиентам комфорт в каждом взаимодействии с банком.",
    gallery: {
      hero: "/images/Asman.main2.png",
      credits: "/images/Asman.main3.png",
      deposit: "/images/Asman.main4.png",
      currency: "/images/Asman.main5.png",
      consumerCredit: "/images/Asman.main6.png",
      aboutBank: "/images/Asman.main7.png",
    },
  },
  {
    id: 4,
    slug: "central-asia-wanderers",
    name: "Central Asia Wanderers",
    type: "Website",
    icon: "/images/Wanderers.Icon.png",
    title: "Central Asia Wanderers",
    description: "Платформа для путешественников по Центральной Азии.",
    industry: "FinTech",
    scope: "UX/UI Design",
    year: "2026",
    image: "/images/Wanderers.main1.png",
    articleTitle:
      "ЗАО «Асман Банк» - это ваш надежный партнер, объединяющий международные стандарты качества и индивидуальный подход к каждому клиенту.",
    articleText:
      "Цель - сделать банковские услуги удобными, безопасными и прозрачными. Мы объединяем передовые технологии, глобальные практики и персональное внимание, чтобы обеспечить клиентам комфорт в каждом взаимодействии с банком.",
    gallery: {
      full: "/images/Wanderers.main2.png",
      countries: "/images/Wanderers.main3.png",
      tourPage: "/images/Wanderers.main4.png",
      galleryModal: "/images/Wanderers.main5.png",
      booking: "/images/Wanderers.main6.png",
    },
  },
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (!hash) return;

    const project = projects.find((item) => item.slug === hash);

    if (project) {
      setActiveProject(project);

      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 500);
    }
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-[140px]">
        <section className="min-h-screen bg-[#F2F3F5] px-[16px] py-10 md:px-[80px] rounded-[12px]">
          <div className="mb-10 flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[24px] font-medium"
            >
              Проекты
            </motion.h1>

            <button
              aria-label="Close"
              className="text-3xl leading-none transition-opacity hover:opacity-60"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            {/* MOBILE PROJECTS */}
            <div className="lg:hidden flex flex-col gap-[24px]">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  id={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="border-b border-[#D9D9D9] pb-[16px]"
                >
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src={project.icon}
                      alt=""
                      width={34}
                      height={34}
                      className="rounded-[8px]"
                    />
                    <div>
                      <h3 className="text-[18px] font-medium text-[#18191A]">
                        {project.name}
                      </h3>
                      <p className="text-[13px] text-[#18191A]">
                        {project.type}
                      </p>
                    </div>
                  </div>

                  <p className="mt-[28px] text-[14px] leading-[22px] text-[#18191A]">
                    {project.description}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                  >
                    <Image
                      src={project.image}
                      alt=""
                      width={900}
                      height={600}
                      className="mt-[16px] w-full h-auto"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* DESKTOP SIDEBAR */}
            <aside className="hidden lg:block space-y-2">
              {projects.map((project, index) => {
                const isActive = activeProject.id === project.id;
                return (
                  <motion.button
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    onClick={() => setActiveProject(project)}
                    className="relative h-[63px] w-[325px] overflow-hidden rounded-[12px] bg-white text-left transition-all duration-300"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeProject"
                        className="absolute inset-0 rounded-[12px]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[12px]">
                          <Image
                            src={project.icon}
                            alt={project.name}
                            fill
                            className="object-contain p-[8px]"
                          />
                        </div>
                        <div>
                          <h3 className="text-[16px] text-[#18191A] font-medium">
                            {project.name}
                          </h3>
                          <p className="mt-1 text-[14px] text-[#434547] font-normal">
                            {project.type}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex h-[24px] w-[24px] mb-4 mr-2 items-center justify-center rounded-[7px] cursor-pointer transition-colors ${isActive ? "bg-[#18191A] text-white" : "bg-[#F2F3F5] text-[#18191A]"}`}
                      >
                        {isActive ? "−" : "+"}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </aside>

            {/* DESKTOP CONTENT */}
            <div className="hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-[12px] bg-white p-6 lg:p-10"
                >
                  <h2 className="text-[32px] font-medium tracking-[-0.04em]">
                    {activeProject.title}
                  </h2>

                  <p className="mt-4 max-w-[900px] text-[16px] leading-relaxed text-[#434547]">
                    {activeProject.description}
                  </p>

                  <div className="mt-10 grid gap-8 md:grid-cols-3">
                    <div>
                      <span className="text-[14px] text-[#18191A]">
                        Industry:
                      </span>
                      <p className="mt-2 text-[16px] font-medium">
                        {activeProject.industry}
                      </p>
                    </div>
                    <div>
                      <span className="text-[14px]">Scope:</span>
                      <p className="mt-2 text-[16px] font-medium">
                        {activeProject.scope}
                      </p>
                    </div>
                    <div>
                      <span className="text-[14px]">Year:</span>
                      <p className="mt-2 text-[16px] font-medium">
                        {activeProject.year}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                    className="mt-10 overflow-hidden rounded-[16px]"
                  >
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      width={1600}
                      height={1000}
                      priority
                      className="h-auto w-full object-cover"
                    />
                  </motion.div>

                  <div className="mt-10">
                    <h3 className="max-w-[1000px] text-[24px] font-medium leading-[32px] lg:text-[32px]">
                      {activeProject.articleTitle}
                    </h3>
                    <p className="mt-6 max-w-[1000px] text-[16px] font-normal leading-[24px] text-[#18191A]">
                      {activeProject.articleText}
                    </p>

                    {/* DUFFEL */}
                    {activeProject.id === 1 && (
                      <>
                        <div className="mt-16 rounded-[16px]">
                          <Image
                            src={activeProject.gallery.hero}
                            alt="#"
                            width={1800}
                            height={1400}
                            className="w-full h-auto rounded-[12px] object-cover"
                          />
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                          {activeProject.gallery.grid.map((image, index) => (
                            <div
                              key={index}
                              className="rounded-[16px] bg-[#F2F3F5] p-8"
                            >
                              <Image
                                src={image}
                                alt=""
                                width={900}
                                height={700}
                                className="w-full h-auto rounded-[12px] object-cover"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="mt-8 rounded-[16px] bg-[#F2F3F5] p-8">
                          <Image
                            src={activeProject.gallery.bottom}
                            alt=""
                            width={1800}
                            height={2200}
                            className="w-full h-auto rounded-[12px] object-cover"
                          />
                        </div>
                      </>
                    )}

                    {/* QEEY */}
                    {activeProject.id === 2 && (
                      <>
                        <div className="mt-6 overflow-hidden rounded-[16px] bg-[#F7F7F7]">
                          <Image
                            src={activeProject.gallery.secondSection.banner}
                            alt="QEEY9"
                            width={1800}
                            height={1400}
                            className="w-full h-auto object-cover"
                          />
                        </div>

                        <div className="mt-6 overflow-hidden rounded-[16px] bg-[#F7F7F7]">
                          <Image
                            src={
                              activeProject.gallery.secondSection.phonesCombined
                            }
                            alt="QEEY10-11"
                            width={1800}
                            height={1400}
                            className="w-full h-auto object-cover"
                          />
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                          <div className="overflow-hidden rounded-[16px] bg-[#F7F7F7]">
                            <Image
                              src={
                                activeProject.gallery.secondSection.middleLeft
                              }
                              alt="QEEY12"
                              width={900}
                              height={900}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                          <div className="overflow-hidden rounded-[16px] bg-[#F7F7F7]">
                            <Image
                              src={
                                activeProject.gallery.secondSection.middleRight
                              }
                              alt="QEEY13"
                              width={900}
                              height={900}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        </div>

                        <div className="mt-6 overflow-hidden rounded-[16px] bg-[#F7F7F7]">
                          <Image
                            src={
                              activeProject.gallery.secondSection.secondCombined
                            }
                            alt="QEEY14-15"
                            width={1800}
                            height={1400}
                            className="w-full h-auto object-cover"
                          />
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                          <div className="overflow-hidden rounded-[16px] bg-[#F7F7F7]">
                            <Image
                              src={
                                activeProject.gallery.secondSection.bottomLeft
                              }
                              alt="QEEY16"
                              width={900}
                              height={900}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                          <div className="overflow-hidden rounded-[16px] bg-[#F7F7F7]">
                            <Image
                              src={
                                activeProject.gallery.secondSection.bottomRight
                              }
                              alt="QEEY17"
                              width={900}
                              height={900}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {/* ASMAN BANK */}
                    {activeProject.id === 3 && (
                      <>
                        <div className="mt-16 rounded-[16px] bg-[#F3F3F3] p-8 lg:p-10">
                          <div className="overflow-hidden rounded-[24px]">
                            <Image
                              src={activeProject.gallery.hero}
                              alt="Asman Bank"
                              width={1800}
                              height={4000}
                              className="w-full h-auto"
                            />
                          </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                          <div className="flex flex-col gap-8">
                            <div className="rounded-[16px] bg-[#F3F3F3] p-8">
                              <Image
                                src={activeProject.gallery.credits}
                                alt="Credits"
                                width={1200}
                                height={900}
                                className="w-full h-auto rounded-[16px]"
                              />
                            </div>
                            <div className="rounded-[16px] bg-[#F3F3F3] p-8">
                              <Image
                                src={activeProject.gallery.currency}
                                alt="Currency"
                                width={1200}
                                height={900}
                                className="w-full h-auto rounded-[16px]"
                              />
                            </div>
                          </div>
                          <div className="rounded-[16px] bg-[#F3F3F3] p-8">
                            <Image
                              src={activeProject.gallery.deposit}
                              alt="Deposit"
                              width={1200}
                              height={2200}
                              className="w-full h-auto rounded-[16px]"
                            />
                          </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                          <div className="rounded-[16px] bg-[#F3F3F3] p-8">
                            <Image
                              src={activeProject.gallery.consumerCredit}
                              alt="Consumer Credit"
                              width={1200}
                              height={900}
                              className="w-full h-auto rounded-[16px]"
                            />
                          </div>
                          <div className="rounded-[16px] bg-[#F3F3F3] p-8">
                            <Image
                              src={activeProject.gallery.aboutBank}
                              alt="About Bank"
                              width={1200}
                              height={900}
                              className="w-full h-auto rounded-[16px]"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {/* WANDERERS */}
                    {activeProject.id === 4 && (
                      <>
                        <div className="mt-16 rounded-[16px] bg-[#F3F3F3] p-8">
                          <Image
                            src={activeProject.gallery.full}
                            alt="Central Asia Wanderers"
                            width={1800}
                            height={7000}
                            className="w-full h-auto rounded-[16px]"
                          />
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                          <div className="rounded-[16px] bg-[#F3F3F3] p-8">
                            <Image
                              src={activeProject.gallery.countries}
                              alt=""
                              width={1200}
                              height={900}
                              className="w-full h-auto rounded-[12px]"
                            />
                          </div>
                          <div className="rounded-[16px] bg-[#F3F3F3] p-8">
                            <Image
                              src={activeProject.gallery.tourPage}
                              alt=""
                              width={1200}
                              height={900}
                              className="w-full h-auto rounded-[12px]"
                            />
                          </div>
                          <div className="rounded-[16px] bg-[#F3F3F3] p-8">
                            <Image
                              src={activeProject.gallery.galleryModal}
                              alt=""
                              width={1200}
                              height={900}
                              className="w-full h-auto rounded-[12px]"
                            />
                          </div>
                          <div className="rounded-[16px] bg-[#F3F3F3] p-8">
                            <Image
                              src={activeProject.gallery.booking}
                              alt=""
                              width={1200}
                              height={900}
                              className="w-full h-auto rounded-[12px]"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section className="mt-[32px]">
          <Footer />
        </section>
      </main>
    </>
  );
}
