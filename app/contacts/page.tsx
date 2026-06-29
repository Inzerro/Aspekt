"use client";

import { motion, type MotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";

const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

export default function ContactsPage() {
  return (
    <>
      <Navbar />

      {/* ================= MOBILE ================= */}
      <section className="block md:hidden mt-[120px] px-[16px] py-[32px]">
        <motion.h2
          {...fadeUp()}
          className="text-[32px] leading-none font-medium dark:text-[#f2f2f2]"
        >
          Свяжитесь с нами
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="mt-[16px] text-[16px] leading-[24px] text-[#434547] dark:text-[#C7C7C7]"
        >
          Свяжитесь с нами, и узнайте больше об автоматизации и о том, как мы
          можем помочь вам достичь ваших бизнес-целей.
        </motion.p>

        <motion.div
          {...fadeUp(0.2)}
          className="mt-[32px] grid grid-cols-2 gap-[50px]"
        >
          {/* Left: contacts */}
          <div>
            <p className="text-[12px] text-[#434547] dark:text-[#C7C7C7]">
              Email:
            </p>
            <a
              href="mailto:Hello@Aspekt.com"
              className="mt-[4px] block text-[16px] text-[#18191A] dark:text-[#f2f2f2]"
            >
              Hello@Aspekt.com
            </a>

            <p className="mt-[16px] text-[12px] text-[#434547] dark:text-[#C7C7C7]">
              Номер телефона:
            </p>
            <a
              href="tel:+996995502598"
              className="mt-[4px] block text-[14px] text-[#18191A] dark:text-[#f2f2f2]"
            >
              +996 (995) 502 - 598
            </a>
          </div>

          {/* Right: socials */}
          <div className="ml-5">
            <p className="text-[12px] text-[#434547] dark:text-[#C7C7C7]">
              Следите за нами
            </p>

            <div className="mt-[16px] flex flex-col gap-[20px]">
              <a href="#" className="flex items-center gap-[6px] text-[16px]">
                <span className="border-b border-[#18191A] dark:border-[#F2F2F2] dark:text-[#f2f2f2]">
                  Instagram
                </span>
                <ArrowUpRight size={20} strokeWidth={2} />
              </a>
              <a href="#" className="flex items-center gap-[6px] text-[16px]">
                <span className="border-b border-[#18191A] dark:border-[#F2F2F2] dark:text-[#f2f2f2]">
                  Telegram
                </span>
                <ArrowUpRight size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= DESKTOP ================= */}
      <section className="hidden md:block mt-[120px] px-5 py-16 lg:px-24 lg:py-24">
        <motion.h2
          {...fadeUp()}
          className="text-[32px] leading-[90%] font-medium lg:text-[44px] dark:text-[#F2F2F2]"
        >
          Свяжитесь с нами
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="mt-8 text-[18px] leading-[140%] text-[#434547] dark:text-[#C7C7C7]"
        >
          Свяжитесь с нами, и узнайте больше об автоматизации и о том, как мы
          можем помочь вам достичь ваших бизнес-целей.
        </motion.p>

        <div className="grid grid-cols-2 gap-[70px] mt-16 max-w-[400px]">
          <motion.div {...fadeUp(0.2)}>
            <p className="text-[12px] text-[#434547] dark:text-[#C7C7C7]">
              Email:
            </p>
            <p className="mt-2 text-[16px] dark:text-[#F2F2F2]">
              Hello@Aspekt.com
            </p>

            <p className="mt-8 text-[12px] text-[#434547] dark:text-[#C7C7C7]">
              Номер телефона:
            </p>
            <p className="mt-2 text-[15px] dark:text-[#F2F2F2]">
              +996 (995) 502 - 598
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.3)}>
            <p className="text-[14px] text-[#434547] dark:text-[#C7C7C7]">
              Следите за нами
            </p>

            <div className="mt-[30px] flex flex-col gap-8">
              <a
                href="..."
                className="flex items-center gap-[8px] text-[16px] underline dark:text-[#F2F2F2]"
              >
                Instagram <ArrowUpRight size={24} strokeWidth={2} />
              </a>
              <a
                href="..."
                className="flex items-center gap-[8px] text-[16px] underline dark:text-[#F2F2F2]"
              >
                Telegram <ArrowUpRight size={24} strokeWidth={2} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </>
  );
}
