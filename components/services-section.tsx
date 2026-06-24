"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    name: "Веб сайты",
    icon: "/icons/Icon.Website.png",
    description:
      "E-commerce, FinTech, Travel Tech, Crypto и другие цифровые продукты",
  },
  {
    name: "Мобильные приложения",
    icon: "/icons/Icon.Mobile.png",
    description: "От MVP до масштабируемых комплексных Super App решений",
  },
  {
    name: "CRM системы",
    icon: "/icons/Icon.CRM.png",
    description: "CRM, Dashboards, B2B, B2C и SaaS платформы любой сложности",
  },
];

export function ServicesSection() {
  return (
    <section id="about" className="py-[60px] md:py-28">
      <div className="mx-auto max-w-[1800px] px-[16px] md:px-[80px]">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-[32px] text-[28px] font-medium leading-none text-[#18191A] md:mb-16 md:text-[32px]"
        >
          Что мы делаем
        </motion.h2>

        <div>
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="
                border-b
                border-[#E6E8EB]
                pb-[28px]
                pt-2
                md:grid
                md:grid-cols-[680px_520px]
                md:items-center
                md:justify-between
                md:py-8
              "
            >
              {/* MOBILE */}
              <div className="md:hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: i * 0.15 + 0.1,
                    duration: 0.8,
                    ease: "easeOut",
                    rotate: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  }}
                  className="relative mb-[24px] h-[72px] w-[64px]"
                >
                  <Image
                    src={service.icon}
                    alt={service.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>

                <h3 className="mb-[20px] text-[24px] font-medium leading-[1.1] text-[#18191A]">
                  {service.name}
                </h3>

                <p className="text-[16px] leading-[1.45] text-[#18191A]">
                  {service.description}
                </p>
              </div>

              {/* DESKTOP */}
              <div className="hidden items-center gap-8 md:flex">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, rotate: -360 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: i * 0.15 + 0.1,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="relative h-16 w-[72px] shrink-0"
                >
                  <Image
                    src={service.icon}
                    alt={service.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>

                <p className="text-[24px] font-medium text-[#18191A]">
                  {service.name}
                </p>
              </div>

              <p className="hidden text-[18px] leading-[26px] text-[#18191A] md:block">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
