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
          className="text-[32px] leading-none font-medium"
        >
          Свяжитесь с нами
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="mt-[16px] text-[16px] leading-[24px] text-[#434547]"
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
            <p className="text-[12px] text-[#434547]">Email:</p>
            <a
              href="mailto:Hello@Aspekt.com"
              className="mt-[4px] block text-[16px] text-[#18191A]"
            >
              Hello@Aspekt.com
            </a>

            <p className="mt-[16px] text-[12px] text-[#434547]">
              Номер телефона:
            </p>
            <a
              href="tel:+996995502598"
              className="mt-[4px] block text-[15px] text-[#18191A]"
            >
              +996 (995) 502 - 598
            </a>
          </div>

          {/* Right: socials */}
          <div>
            <p className="text-[12px] text-[#434547]">Следите за нами</p>

            <div className="mt-[16px] flex flex-col gap-[20px]">
              <a href="#" className="flex items-center gap-[6px] text-[16px]">
                <span className="border-b border-[#18191A]">Instagram</span>
                <ArrowUpRight size={20} strokeWidth={2} />
              </a>
              <a href="#" className="flex items-center gap-[6px] text-[16px]">
                <span className="border-b border-[#18191A]">Telegram</span>
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
          className="text-[32px] leading-[90%] font-medium lg:text-[44px]"
        >
          Свяжитесь с нами
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="mt-8 text-[18px] leading-[140%] text-[#434547]"
        >
          Свяжитесь с нами, и узнайте больше об автоматизации и о том, как мы
          можем помочь вам достичь ваших бизнес-целей.
        </motion.p>

        <div className="grid grid-cols-2 gap-[70px] mt-16 max-w-[400px]">
          <motion.div {...fadeUp(0.2)}>
            <p className="text-[12px] text-[#434547]">Email:</p>
            <p className="mt-2 text-[16px]">Hello@Aspekt.com</p>

            <p className="mt-8 text-[12px] text-[#434547]">Номер телефона:</p>
            <p className="mt-2 text-[15px]">+996 (995) 502 - 598</p>
          </motion.div>

          <motion.div {...fadeUp(0.3)}>
            <p className="text-[14px] text-[#434547]">Следите за нами</p>

            <div className="mt-[30px] flex flex-col gap-8">
              <a
                href="..."
                className="flex items-center gap-[8px] text-[16px] underline"
              >
                Instagram <ArrowUpRight size={24} strokeWidth={2} />
              </a>
              <a
                href="..."
                className="flex items-center gap-[8px] text-[16px] underline"
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
