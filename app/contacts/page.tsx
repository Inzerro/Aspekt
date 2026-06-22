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

      <section className="mt-[120px] px-5 py-16 lg:px-24 lg:py-24">
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

        <div className="grid grid-cols-2 gap-[40px] mt-16 max-w-[500px]">
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

      <section>
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}
